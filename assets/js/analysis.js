"use strict";

// $(document).ready(function()
// {
//   statistics();
//   getComments();
// });

// window.api_prefix = 'https://www.iwannerfuck.xyz/api/';
window.api_prefix = 'https://www.maoshare.xyz/api/';
// window.api_prefix = 'http://localhost:3004/api/';

function statistics (ar_id) {
    axios({
          method: 'get',
          url: `${api_prefix}statistics?ar_id=${ar_id}`,
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

function praise (ar_id) {
    axios({
          method: 'get',
          url: `${api_prefix}praise?ar_id=${ar_id}`,
          data: {}
        })
        .then(function(response) {
          if (JSON.stringify(response.data) == '{}') {
            $('#praise_btn').text('已赞')
          }
          statistics(ar_id);
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

function getComments (wait_loading) {
    axios({
          method: 'get',
          url: `${api_prefix}comments`,
          data: {}
        })
        .then(function(response) {
          // console.log(response.data)
          $('#comment').html(response.data)
          if (wait_loading) {
            $('.masker').addClass('hide_masker');
          }
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
  const CF = document.commentForm;
  // console.log('cf', CF)
  if (Validate(CF)) {
    // show masker
    $('.masker').removeClass('hide_masker');
    axios({
      method: 'post',
      url: `${api_prefix}leave_comment`,
      data: {
        username: CF.username.value,
        email: CF.email.value,
        content: CF.content.value
      }
    })
    .then(function(response) {
      // console.log(response.data)
      if (response.data.message) {
        alert(response.data.message)
      }
      getComments('wait_loading');
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

function reply_com(e) {
  // console.log('e', e.getAttribute("id"))
  // const RF = document.ReplyForm;
  const RF = $('form.target')[0];
  // console.log('RF', RF[0])
  if (Validate(RF)) {
    // show masker
    $('.masker').removeClass('hide_masker');
    axios({
      method: 'post',
      url: `${api_prefix}leave_comment`,
      data: {
        username: RF.username.value,
        email: RF.email.value,
        content: RF.content.value,
        reply_to: e.getAttribute("id")
      }
    })
    .then(function(response) {
      // console.log(response.data)
      if (response.data.message) {
        alert(response.data.message)
      }
      getComments('wait_loading');
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

function Validate(form) {
  if (form.username.value == "")
  {
    return false;
  }
  const email_reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
  if (form.email.value == "" || !email_reg.test(form.email.value))
  {
    return false;
  }
  if (form.content.value == "")
  {
    return false;
  }
  return true;
}

function show() {
  $('#first input').removeClass('hide');
}

function show_reply(e) { 
  $('.wrap form').removeClass('target').addClass('hide'); 
  $(e).siblings(".hide").removeClass('hide').addClass('target');
}

