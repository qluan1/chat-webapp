const url = 'http://locahost:3000/chat';

export const getChatReply = async (systemMessage, messages) => {
  const arr = {};
  if (systemMessage) {
    arr.systemMessage = [{
      role: 'system',
      content: systemMessage,
    }];
  }
  arr.messages = messages;
  response = await fetch(
    url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(arr),
    }
  );
  return response;
};
