//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
    
    function wrapper(...args) {
        debugger;
        const hash = md5(args);
        let objectInCache = cache.find(item => item.hash == hash);
        if (objectInCache) {
            console.log("Из кэша: " + objectInCache.result);
            return "Из кэша: " + objectInCache.result;
        }
        let result = func(...args);
        cache.push({hash,
            result
        });
        if (cache.length > 5) {
            cache.shift();
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }
    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let colDone = true;
  wrapper.count = 0;
  wrapper.allCount = 0;
  function wrapper (...args) {
  let count = 0;
    if(colDone) {
        func(...args);
        colDone = false;
        wrapper.count++;
    }
    if (timeoutId) {
        console.log("Удалили текущий таймаут");
        clearTimeout(timeoutId);
    }
    console.log("создаем новый таймаут");
    timeoutId = setTimeout(() => {
        timeoutId = null;
        console.log(func(...args));
        console.log("вызвали колбек");
        wrapper.count++;
    }, delay);
    wrapper.allCount++;
  }
  return wrapper;
}
