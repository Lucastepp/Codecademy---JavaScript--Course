

async function usingTryCatch() {
    try {
      let resolveValue = await asyncFunction('thing that will fail');
      let secondValue = await secondAsyncFunction(resolveValue);
    } catch (err) {
      // Catches any errors in the try block
      console.log(err);
    }
   }
    
   usingTryCatch();