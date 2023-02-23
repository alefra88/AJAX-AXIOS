// (() => {
//   const $fetchAsync = document.getElementById("fetch-async"),
//     $fragment = document.createDocumentFragment();
//   async function getData() {
//     try {
//       let res = await fetch("https://rickandmortyapi.com/api/location"),
//         { results: characters } = await res.json();
//       if (!res.ok) throw { status: res.status, statusText: res.statusText };
//       characters.forEach((el) => {
//         const article = document.createRange().createContextualFragment(`
//       <article>
//       <div class="container">
//         <h2> location name: ${el.name}</h2>
//         <h3>type: ${el.type}</h3>
//         <h3>dimension: ${el.dimension}</h3>
//       </div>
//       </article>
//       <br>
//       <hr>
//     `);
//         $fragment.append(article);
//       });
//       $fetchAsync.append($fragment);
//     } catch (err) {
//       console.log(err);
//       let message = err.statusText || "Error desconocido";
//       $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
//     } finally {
//     }
//   }
//   getData();
// })();

(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();
  axios
    .get("https://rickandmortyapi.com/api/location")
    .then((res) => {
      // console.log(res);
      let json = res.data.results;
      json.forEach((el) => {
        const article = document.createRange().createContextualFragment(`
              <article>
              <div class="container">
                <h2> location name: ${el.name}</h2>
                <h3>type: ${el.type}</h3>
                <h3>dimension: ${el.dimension}</h3>
              </div>
              </article>
              <br>
              <hr>
            `);
        $fragment.append(article);
      });
      $axios.append($fragment);
    })
    .catch((err) => {
      let message = err.response.statusText || "Error aquì -->";
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => {
      console.log("Hola hola cara de bola");
    });
})();

(() => {
  const $axiosAsyncAwait = document.getElementById("axios-async-await"),
    $fragment = document.createDocumentFragment();
  async function getData() {
    try {
      let res = await axios.get("https://rickandmortyapi.com/api/episode"),
        jsonResults = res.data.results;
      jsonResults.forEach((el) => {
        const article = document.createRange().createContextualFragment(`
              <article>
              <div class="container">
               <h2>Number of episodes: ${res.data.info.count}</h2>
                <h2> episode name: ${el.name}</h2>
                <h3>episode number: ${el.id}</h3>
                <h3>episode premiere: ${el.air_date}</h3>
              </div>
              </article>
              <br>
              <hr>
            `);
        $fragment.append(article);
      });
      $axiosAsyncAwait.append($fragment);
    } catch (err) {
      let message = err.response.statusText || "Error aquì -->";
      $axiosAsyncAwait.innerHTML = `Error ${err.response.status}: ${message}`;
    } finally {
      console.log("buenas");
    }
  }
  getData();
})();
