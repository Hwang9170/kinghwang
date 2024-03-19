document.getElementById('message-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var message = document.getElementById('message').value;
  var messageContainer = document.getElementById('messages');
  var messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  var authorPara = document.createElement('p');
  authorPara.classList.add('author');
  authorPara.textContent = name;
  var messagePara = document.createElement('p');
  messagePara.textContent = message;
  messageDiv.appendChild(authorPara);
  messageDiv.appendChild(messagePara);
  messageContainer.appendChild(messageDiv);
  document.getElementById('name').value = '';
      document.getElementById('message').value = '';
    });