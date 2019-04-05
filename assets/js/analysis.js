"use strict";

$(document).ready(function()
{
  statistics()
  visit()
});

window.api_prefix = 'https://www.iwannerfuck.xyz/api/';

function statistics () {
    axios({
          method: 'get',
          url: `${api_prefix}statistics`,
          data: {}
        })
        .then(function(response) {
          $('#visit_number').html(1000+response.data.visit_num);
          $('#praise_number').html(20+response.data.praise_num)
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

function praise () {
    axios({
          method: 'get',
          url: `${api_prefix}praise`,
          data: {}
        })
        .then(function(response) {
          if (JSON.stringify(response.data) == '{}') {
            $('#praise_btn').text('已赞')
          }
          statistics()
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

