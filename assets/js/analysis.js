"use strict";

$(document).ready(function()
{
  statistics();
  getComments();
});

window.api_prefix = 'https://www.iwannerfuck.xyz/api/';
// window.api_prefix = 'http://localhost:3004/api/';

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

function getComments () {
    axios({
          method: 'get',
          url: `${api_prefix}comments`,
          data: {}
        })
        .then(function(response) {
          // console.log(response.data)
          $('#comment').html(response.data)
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

function leave_com() {
  if (Validate()) {
    axios({
      method: 'post',
      url: `${api_prefix}leave_comment`,
      data: {
        username: document.commentForm.username.value,
        email: document.commentForm.email.value,
        content: document.commentForm.content.value
      }
    })
    .then(function(response) {
      // console.log(response.data)
      if (response.data.message) {
        alert(response.data.message)
      }
      getComments();
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
}

function Validate() {
  if (document.commentForm.username.value == "")
  {
    return false;
  }
  const email_reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
  if (document.commentForm.email.value == "" || !email_reg.test(document.commentForm.email.value))
  {
    return false;
  }
  if (document.commentForm.content.value == "")
  {
    return false;
  }
  return true;
}

function show() {
  $('#first input').removeClass('hide');
}

function show_reply() {
  console.log($(this).siblings(".hide"))
  $(this).siblings(".hide").removeClass('hide');
}

