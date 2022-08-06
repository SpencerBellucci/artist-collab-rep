// import for faker
import { faker } from '@faker-js/faker';

// import tensorflow
import * as tfvis from '@tensorflow/tfjs-vis'
import * as tf from '@tensorflow/tfjs'

//---------- create fake data -------------//

  // from Penny Liu on stackoverflow
  const generateArtist = () => {
    return {
      first_name: faker.name.firstName(),
      genre_score: faker.random.numeric(),
      key_score: faker.random.numeric(),
    };
  };
  
  const generateArtists = (numUsers) => {
    return Array.from({ length: numUsers }, generateArtist);
  };
  
  let dataObj = generateArtists(50);


  //---------- tensor ai ---------------//

  // main function to run ai

  async function run() {
    // plot artist data
    const values = dataObj.map(d => ({
        x: d.genre_score,
        y: d.key_score,
    }));

    // render the scatter plot for data
    tfvis.render.scatterplot(
        {name: 'Genre v Key'},
        {values},
        {
            xLabel: 'Genre',
            yLabel: 'Key',
            height: 300
        }
    );

    // create the model
    const model = createModel();
    tfvis.show.modelSummary({name: 'Model Summary'}, model);

    // convert the data to a usable form for training
    const tensorData = convertToTensor(dataObj);
    const {inputs, labels} = tensorData;

    // train the model
    await trainModel(model, inputs, labels);
    console.log('Done Training');

    testModel(model, dataObj, tensorData);
  }

  // function for creating sequential model
  function createModel() {
    // create a sequential model
    const model = tf.sequential();
    
    // add a single input layer
    model.add(tf.layers.dense({inputShape: [1], units: 1, useBias: true}));

    // add an output layer
    model.add(tf.layers.dense({units: 1, useBias: true}));

    return model;
  }

  // convert the data to 'tensors'
  function convertToTensor(dataObj) {
    return tf.tidy(() => {
        // shuffle data
        tf.util.shuffle(dataObj);
    
        // convert data to tensor
        const inputs = dataObj.map(d => d.horsepower)
        const labels = dataObj.map(d => d.mpg);
    
        const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
        const labelTensor = tf.tensor2d(labels, [labels.length, 1]);
    
        // normalize data using range 0 - 1 (min - max)
        const inputMax = inputTensor.max();
        const inputMin = inputTensor.min();
        const labelMax = labelTensor.max();
        const labelMin = labelTensor.min();
    
        const normalizedInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
        const normalizedLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));
    
        return {
          inputs: normalizedInputs,
          labels: normalizedLabels,
          // return min max bound to be used later
          inputMax,
          inputMin,
          labelMax,
          labelMin,
        }
    });
  }

  // train the model
  async function trainModel(model, inputs, labels) {
    // prep the model to be trained
    model.compile({
        optimizer: tf.train.adam(),
        loss: tf.losses.meanSquaredError,
        metrics: ['mse'],
    });

    const batchSize = 32;
    const epochs = 50;

    return await model.fit(inputs, labels, {
        batchSize,
        epochs,
        shuffle: true,
        callbacks: tfvis.show.fitCallbacks(
        { name: 'Training Performance' },
        ['loss', 'mse'],
        { height: 200, callbacks: ['onEpochEnd'] }
        )
    });
  }

  // test the trained model
  function testModel(model, inputData, normalizationData) {
    const {inputMax, inputMin, labelMin, labelMax} = normalizationData;
        
        const [xs, preds] = tf.tidy(() => {
    
            const xs = tf.linspace(0, 1, 100);
            const preds = model.predict(xs.reshape([100, 1]));
    
            const unNormXs = xs
            .mul(inputMax.sub(inputMin))
            .add(inputMin);

            const unNormPreds = preds
            .mul(labelMax.sub(labelMin))
            .add(labelMin);

            // un-normalize the data
            return [unNormXs.dataSync(), unNormPreds.dataSync()];
        });
    
        const predictedPoints = Array.from(xs).map((val, i) => {
            return {x: val, y: preds[i]}
        });
        
        const originalPoints = inputData.map(d => ({
            x: d.genre_score, y: d.key_score,
        }));
        
        
        tfvis.render.scatterplot(
            {name: 'Model Predictions vs Original Data'},
            {values: [originalPoints, predictedPoints], series: ['original', 'predicted']},
            {
                xLabel: 'Genre',
                yLabel: 'Key',
                height: 300
            }
        );
    }




    function TENSOR_AI() {
        run();
    }

  export default TENSOR_AI;
