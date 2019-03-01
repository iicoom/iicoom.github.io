"use strict";

$(document).ready(function()
{
  getVisitNumber()
  getPraiseNumber()
});

window.api_prefix = 'http://www.iwannerfuck.xyz/api/';

function getVisitNumber () {
    axios({
          method: 'get',
          url: `${api_prefix}visit/number`,
          data: {}
        })
        .then(function(response) {
          console.log('response:', response); 
          alert(response.data);
        })
        .catch(function (error) {
	        if (error.response) {
	          console.log(error.response.data);
	          alert(error.response.data.message)
	        } else if (error.request) {
	          console.log(error.request);
	        } else {
	          console.log('Error', error.message);
	        }
        });
}

function getPraiseNumber () {
    axios({
          method: 'get',
          url: `${api_prefix}praise/number`,
          data: {}
        })
        .then(function(response) {
          console.log('response:', response); 
          alert(response.data);
        })
        .catch(function (error) {
	        if (error.response) {
	          console.log(error.response.data);
	          alert(error.response.data.message)
	        } else if (error.request) {
	          console.log(error.request);
	        } else {
	          console.log('Error', error.message);
	        }
        });
}