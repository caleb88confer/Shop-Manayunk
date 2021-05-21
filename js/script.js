// Pseudocode

// 1) page loads, fetch data from Phila API 
// 2) store resulting data in an array so we can filter it and create a new array 
// 3) using the new data create the UI and append to the DOM 

/*----- constants -----*/
/*----- app's state (variables) -----*/
let businesses;
// let bizneses = businesses.rows 
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/
getAppData();

function getAppData() { 
$.ajax("https://phl.carto.com/api/v2/sql?q=SELECT%20*%20FROM%20registered_local_businesses%20ORDER%20BY%20business_name%20ASC")
    .then(function (data) {
            businesses = data.rows;
            render();

        },
        function (error) {
            console.log('bad request: ', error);
        }
    );
    }


function render() {
    let yunkBiz = businesses.filter(function(biz) {
        return biz.zip_code === "19127";

    });
