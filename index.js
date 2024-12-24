import ollama from 'ollama';

// models
const JESUS_MODEL = 'jesusmodel';
const DON_DRAPPER_MODEL = 'dondrappermodel';

async function myModelSays(model, query) {
  try {
    const response = await ollama.chat({
      model: model,
      messages: [{ role: 'user', content: query }],
    });

    console.log(response.message.content);
  } catch (error) {
    console.log('Error interacting with the model');
  }
};

const query = 'Plan a fun birthday party for my dog';
// const query = 'How to design the best cover for a children book?';
// const query = 'How to make wine out of water?';

myModelSays(JESUS_MODEL, query);
