import React from 'react'



const headers = {
  'Content-Type': 'application/json',
  'Authorization': sessionStorage.getItem('token')

}



const ip = "52.66.200.231:999"
export function login(emailId, password) {
  console.log(emailId, password)
  var targetUrl = 'http://' + ip + '/api/v1/workflow/login/'
  return fetch(targetUrl + emailId + '/' + password + '/', {
    headers: {
      "Content-Type": "application/json"
    }
  });
}
export function addUser(username, email, password, roleid, checkedItems) {

  const savedtoken = sessionStorage.getItem("token")
  var targetUrl = 'http://' + ip + '/api/v1/workflow/createuser/'

  return fetch(targetUrl, {
    method: 'post', headers: {
      'Content-Type': 'application/json',
      'Authorization': savedtoken
    },
    body: JSON.stringify({

      username: username,

      email: email,

      password: password,

      role_id: roleid,

      product_id_list: checkedItems,

    })
  });
}

export function getAllProducts() {
  const savedtoken = sessionStorage.getItem("token")

  var targetUrl = 'http://' + ip + '/api/v1/workflow/product'
  console.log(+targetUrl)
  return fetch(+targetUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': savedtoken
    }
  });
}

export function getProducts() {
  var targetUrl = 'http://' + ip + '/api/v1/workflow/product/'
  console.log("token---->", sessionStorage.getItem("token"))
  const savedtoken = sessionStorage.getItem("token")
  return fetch(targetUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': savedtoken
    }
  });
}
export function getBuildsCount() {

  const savedtoken = sessionStorage.getItem("token")
  var targetUrl = 'http://' + ip + '/api/v1/workflow/getallbuildscount/'
  return fetch(targetUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': savedtoken
    }
  });
}
export function getAllProductsCount() {

  const savedtoken = sessionStorage.getItem("token")
  var targetUrl = 'http://' + ip + '/api/v1/workflow/productcount/'
  return fetch(targetUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': savedtoken
    }
  });

}
export function getApproveBuildsCount() {

  const savedtoken = sessionStorage.getItem("token")
  var targetUrl = 'http://' + ip + '/api/v1/workflow/approvedcount/'
  return fetch(targetUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': savedtoken
    }
  });
}

export function getRejectedBuildsCount() {

  const savedtoken = sessionStorage.getItem("token")
  var targetUrl = 'http://' + ip + '/api/v1/workflow/rejectedcount/'
  return fetch(targetUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': savedtoken
    }
  });
}

export function getTriggerBranchData() {

  const savedtoken = sessionStorage.getItem("token")

  var targetUrl = 'http://' + ip + '/api/v1/workflow/getbranches/'
  return fetch(targetUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': savedtoken
    }
  });
}

export function getProductBuildDetails(producId) {

  const savedtoken = sessionStorage.getItem("token")

  var targetUrl = 'http://' + ip + '/api/v1/workflow/build_table/'
  return fetch(targetUrl + producId + '/', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': savedtoken
    }, method: 'post',
  });
}

export function addProduct(product) {

  const savedtoken = sessionStorage.getItem("token")
  var targetUrl = 'http://' + ip + '/api/v1/workflow/createproduct/'
  return fetch(targetUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': savedtoken
    }, method: 'post',
    body: JSON.stringify({
      product_name: product,
    })
  });

}

export function getLatestBuilds() {

  const savedtoken = sessionStorage.getItem("token")
  var targetUrl = 'http://' + ip + '/api/v1/workflow/latestbuilds/'
  return fetch(targetUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': savedtoken
    },

  });
}

export function getApprovedBuilds() {

  const savedtoken = sessionStorage.getItem("token")

  var targetUrl = 'http://' + ip + '/api/v1/workflow/approved/'
  return fetch(targetUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': savedtoken
    },

  });

}

export function getRejectedBuilds() {

  const savedtoken = sessionStorage.getItem("token")
  var targetUrl = 'http://' + ip + '/api/v1/workflow/rejected/'
  return fetch(targetUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': savedtoken
    },

  });

}


export function getApproveBuilds(VersionId) {

  const savedtoken = sessionStorage.getItem("token")
  var targetUrl = 'http://' + ip + '/api/v1/workflow/build/approve/' + VersionId + '/'
  return fetch(targetUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': savedtoken
    },

  });

}

export function getRejecteddBuilds(VersionId) {

  const savedtoken = sessionStorage.getItem("token")
  var targetUrl = 'http://' + ip + '/api/v1/workflow/rejected/' + VersionId + '/'
  return fetch(targetUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': savedtoken
    },

  });

}

export function triggerBuildUsingBranch(branchName, productId) {
  const savedtoken = sessionStorage.getItem("token")

  var targetUrl = 'http://' + ip + '/api/v1/workflow/rebuild/' + branchName + '/' + productId + '/'
  return fetch(targetUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': savedtoken
    }, method: 'post',
  });
}

export function triggerBuildUsingBranchfromCommitId(commitId, productId) {
  const savedtoken = sessionStorage.getItem("token")

  var targetUrl = 'http://' + ip + '/api/v1/workflow/rebuild/' + commitId + '/' + productId + '/'
  return fetch(targetUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': savedtoken
    }, method: 'post',
  });
}

export function getAllUserForAdmin() {

  const savedtoken = sessionStorage.getItem("token")

  var targetUrl = 'http://' + ip + '/api/v1/workflow/users/'
  return fetch(targetUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': savedtoken
    },
  });
}


export function getbuildsPerProduct(productId) {

  const savedtoken = sessionStorage.getItem("token")

  var targetUrl = 'http://' + ip + '/api/v1/workflow/buildcountinproduct/' + productId + '/'
  return fetch(targetUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': savedtoken
    }, method: 'post',
  });
}

export function getApproveBuildsPerProduct(productId) {

  const savedtoken = sessionStorage.getItem("token")

  var targetUrl = 'http://' + ip + '/api/v1/workflow/approvedcount/' + productId + '/'
  return fetch(targetUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': savedtoken
    }, method: 'post',
  });

}

export function approveBuilds(versionidOfBranch) {

  const savedtoken = sessionStorage.getItem("token")

  var targetUrl = 'http://' + ip + '/api/v1/workflow/build/approve/' + versionidOfBranch + '/'
  return fetch(targetUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': savedtoken
    }, method: 'post'
  });
}

export function rejectBuilds(versionidOfBranch) {

  const savedtoken = sessionStorage.getItem("token")

  var targetUrl = 'http://' + ip + '/api/v1/workflow/build/reject/' + versionidOfBranch + '/'
  return fetch(targetUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': savedtoken
    }, method: 'post'
  });
}

export function singleBuildDetails(buildId) {

  const savedtoken = sessionStorage.getItem("token")

  var targetUrl = 'http://' + ip + '/api/v1/workflow/build_details/' + buildId + '/'
  return fetch(targetUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': savedtoken
    }
  });
}