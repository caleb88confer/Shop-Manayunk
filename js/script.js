// Pseudocode

// 1) page loads, fetch data from Phila API 
// 2) store resulting data in an array so we can filter it and create a new array 
// 3) using the new data create the UI and append to the DOM 
// 4) drop down menu with list of philly zeighborhood names  
// 5) input box to enter zipcode. 

/*----- constants -----*/
/*----- app's state (variables) -----*/
let businesses;
let localZip
// let bizneses = businesses.rows 
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/
getAppData();

function getAppData() { 
$.ajax("https://phl.carto.com/api/v2/sql?q=SELECT%20*%20FROM%20registered_local_businesses%20ORDER%20BY%20business_name%20ASC")
    .then(function (data) {
            businesses = data.rows;
            filter();
            render();

        },
        function (error) {
            console.log('bad request: ', error);
        }
    );
    };
    // filter by zip code 
    function filter () {
    localZip = businesses.filter(function(biz) {
        return biz.zip_code === "19128";
    });
    console.log(localZip);
    };

    // rendering businesses for local zip
    function render() {
        const html = localZip.map(function(biz) {
            return `
            <article>
                <h2>${biz.business_name}</h2>
                <p>${biz.business_address}</p>
                <p>${biz.email}</p>
            </article>
            `;
        });

        $('main').append(html);
    }

