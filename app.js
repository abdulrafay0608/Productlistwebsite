const allItemsBtn = document.querySelector(".allItem");
const smartphoneBtn = document.querySelector(".smartphones");
const laptopsBtn = document.querySelector(".laptops");
const fragrancesBtn = document.querySelector(".fragrances");
const skincareBtn = document.querySelector(".skincare");
const groceriesBtn = document.querySelector(".groceries");
const homeDecorationBtn = document.querySelector(".home-decoration");
const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector(".searchInput");



getPorducts()
const container = document.getElementById('container')
const tags = document.getElementById('tags')

async function getPorducts() {
    // const productsResponse = await fetch('https://dummyjson.com/products')
    //     .then(res => res.json())

    const res = await fetch('https://dummyjson.com/products');
    const productsResponse = await res.json();
    console.log("prommis ", productsResponse);

    let products = productsResponse.products; // array of objects 

    /* [{},{},{}...] */

    //if we do it thruofh for loop

    // for (var i = 0; i < products.length; i++) {
    //     const card = `<div class='card' >
    //     <img src =${products[i].thumbnail} />
    //     <h4>${products[i].title} </h4>
    //     </div>`
    // }

    // map
    // let categories = products.map((obj, i) => {
    //     var prod = obj
    //     prod.available = true
    //     return prod
    // })

    //For Each
    products.forEach((data) => {              //It doesn't return anything
        const card = `<div class='card' >
        <img src =${data.thumbnail} />
        <h4>${data.title} </h4>
        <h4>${"$ " + data.price} </h4>
        </div>`
        container.innerHTML += card
    })

    //map

    /* const arr1 = [1,2,3,4,5]
        const arr2 = arr1.map((num, i)=> {
            return arr1[i] * 2;
        })
        console(arr2)     Out:- [2,4,6,8,10]
    */

    const categories = []
    products.forEach((obj) => {
        if (!categories.includes(obj.category)) {
            categories.push(obj.category)
        }
    })
    // categories.forEach((cat) => {
    //     const chip = `<div class = 'chip' id = 'chip'> <span> ${cat}</span> </div>`
    //     tags.innerHTML += chip;
    // })

    // filter


    //find 
    const iphone = products.find((data) => data.title == 'iPhone X')
    console.log('iphone->', iphone)

    // all items
    allItemsBtn.addEventListener('click', () => {

        container.innerHTML = ''

        products.forEach((data) => {              //It doesn't return anything
            const card = `<div class='card' >
        <img src =${data.thumbnail} />
        <h4>${data.title} </h4>
        <h4>${"$ " + data.price} </h4>
        </div>`
            container.innerHTML += card
        })
    })

    // find phone
    smartphoneBtn.addEventListener('click', (e) => {
        const smartphones = products.filter((data) => data.category == 'smartphones')
        console.log('smartphones->', smartphones);

        container.innerHTML = '';

        smartphones.forEach((data) => {              //It doesn't return anything
            const card = `<div class='card' >
            <img src =${data.thumbnail} />
            <h4>${data.title} </h4>
            <h4>${"$ " + data.price} </h4>
            </div>`
            container.innerHTML += card
        })


    })
    // find laptops
    laptopsBtn.addEventListener('click', () => {
        const laptops = products.filter((data) => data.category == 'laptops')
        console.log('laptops->', laptops)

        container.innerHTML = '';

        laptops.forEach((data) => {              //It doesn't return anything
            const card = `<div class='card' >
            <img src =${data.thumbnail} />
            <h4>${data.title} </h4>
            <h4>${"$ " + data.price} </h4>
            </div>`
            container.innerHTML += card
        })
    })

    // find fragrances
    fragrancesBtn.addEventListener('click', () => {
        const fragrances = products.filter((data) => data.category == 'fragrances')
        console.log('fragrances->', fragrances)

        container.innerHTML = '';

        fragrances.forEach((data) => {              //It doesn't return anything
            const card = `<div class='card' >
            <img src =${data.thumbnail} />
            <h4>${data.title} </h4>
            <h4>${"$ " + data.price} </h4>
            </div>`
            container.innerHTML += card
        })
    })
    // find Skincare
    skincareBtn.addEventListener('click', () => {
        const skincare = products.filter((data) => data.category == 'skincare')
        console.log('skincare->', skincare)

        container.innerHTML = '';

        skincare.forEach((data) => {              //It doesn't return anything
            const card = `<div class='card' >
            <img src =${data.thumbnail} />
            <h4>${data.title} </h4>
            <h4>${"$ " + data.price} </h4>
            </div>`
            container.innerHTML += card
        })
    })

    // find groceries
    groceriesBtn.addEventListener('click', () => {
        const groceries = products.filter((data) => data.category == 'groceries')
        console.log('groceries->', groceries)

        container.innerHTML = '';

        groceries.forEach((data) => {              //It doesn't return anything
            const card = `<div class='card' >
            <img src =${data.thumbnail} />
            <h4>${data.title} </h4>
            <h4>${"$ " + data.price} </h4>
            </div>`
            container.innerHTML += card
        })
    })

    // find home-decoration
    homeDecorationBtn.addEventListener('click', () => {
        const homeDecoration = products.filter((data) => data.category == 'home-decoration')
        console.log('Home-decoration->', homeDecoration)

        container.innerHTML = '';

        homeDecoration.forEach((data) => {              //It doesn't return anything
            const card = `<div class='card' >
            <img src =${data.thumbnail} />
            <h4>${data.title} </h4>
            <h4>${"$ " + data.price} </h4>
            </div>`
            container.innerHTML += card
        })
    })



    // Search Input

    searchBtn.addEventListener('click', () => {
        const search = products.filter((data) => data.category == searchInput.value)
        // console.log('search->', search)
        // console.log( "Check-->", searchInput.value);

        
        container.innerHTML = '';

        search.forEach((data) => {              //It doesn't return anything
            const card = `<div class='card' >
            <img src =${data.thumbnail} />
            <h4>${data.title} </h4>
            <h4>${"$ " + data.price} </h4>
            </div>`
            container.innerHTML += card
        })
    })


    // //Search button click
    // document.getElementById("search").addEventListener("click", () => {
    //     //initializations
    //     let searchInput = document.getElementById("search-input").value;
    //     let elements = document.querySelectorAll(".product-name");
    //     let cards = document.querySelectorAll(".card");

    //     //loop through all elements
    //     elements.forEach((element, index) => {
    //         //check if text includes the search value
    //         if (element.innerText.includes(searchInput.toUpperCase())) {
    //             //display matching card
    //             cards[index].classList.remove("hide");
    //         } else {
    //             //hide others
    //             cards[index].classList.add("hide");
    //         }
    //     });
    // });


}


// //forEach-->It does something but doesn't return anything.
// //map-->It does something and returns an array of equal size on which it is called.
// //filter-->It returns a new array and it only contain those elements which passed the specified condition.
// //find-->It returns the first match.
// //findbyindex-->It returns the index of that first match.
// //reduce-->
// //sort-->It sorts the array based on Numeric and Alphabets.