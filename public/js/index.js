const socket = io();

socket.on('connect', function() {
  console.log('Connected to server');
});

socket.on('newMessage', function(message) {
  const formattedTime = moment(message.createdAt).format('h:mm a');
  const li = $('<li></li>');
  li.text(`${message.from} ${formattedTime}: ${message.text}`);

  $('#messages').append(li);
});

socket.on('newLocationMessage', function(message) {
  const formattedTime = moment(message.createdAt).format('h:mm a');

  const li = $('<li></li>');
  const a = $('<a target="_blank">My current location</a>');

  li.text(`${message.from} ${formattedTime}: `);
  a.attr('href', message.url);

  li.append(a);
  $('#messages').append(li);
});
socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

$('#message-form').on('submit', function(e) {
  e.preventDefault();

  const messageTextBox = $('[name=message]');
  socket.emit(
    'createMessage',
    {
      from: 'User',
      text: messageTextBox.val()
    },
    function() {
      messageTextBox.val('');
    }
  );
});

const locationButton = $('#send-location');

locationButton.on('click', function() {
  if (!navigator.geolocation) {
    return alert('Geolocation not supported by your browser.');
  }

  locationButton.attr('disabled', 'disabled').text('Sending location....');

  navigator.geolocation.getCurrentPosition(
    function(position) {
      locationButton.removeAttr('disabled').text('Send location');
      socket.emit('createLocationMessage', {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    },
    function() {
      locationButton.removeAttr('disabled').text('Send location');
      alert('Unable to fetch location.');
    }
  );
});
