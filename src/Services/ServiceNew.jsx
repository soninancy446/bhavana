import React from 'react'
import axios from 'axios'
export const ServiceNew = () => {
    return (
        <div>
            
        </div>
    )
}

const headers={
    'Content-Type': 'application/json',
    'Authorization' : sessionStorage.getItem('token')
    
}



const ip = "52.66.200.231:999"
export  function login(emailId,password) {
   console.log(emailId,password)

   var targetUrl='http://'+ip+'/api/v1/workflow/login/'

   
  // console.log(targetUrl+emailId+'/'+password+'/')
   return fetch(targetUrl+emailId+'/'+password+'/', { headers: {
    "Content-Type": "application/json"
  } });
}
export function addUser(username,email,password,roleid,checkedItems) {
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
    console.log("in getUsersMethod")
    
    var targetUrl = 'http://'+ip+'/api/v1/workflow/createuser/'
    // console.log(targetUrl)
     return fetch(targetUrl, { method : 'post' ,headers: {
        'Content-Type': 'application/json',
        'Authorization' : savedtoken
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
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
    console.log("in getUsersMethod")
  
   var targetUrl = 'http://'+ip+'/api/v1/workflow/product'
    console.log(targetUrl)
     return fetch(targetUrl, { headers: {
        'Content-Type': 'application/json',
        'Authorization' : savedtoken
    } });
 }

 export function getProducts() {
    
     console.log("head",headers)
  
    var targetUrl = 'http://'+ip+'/api/v1/workflow/product/'
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
    return fetch(targetUrl, { headers : {
        'Content-Type': 'application/json',
        'Authorization' : savedtoken
    } });
}
export function getBuildsCount() {
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
    console.log("head",headers)

   
   var targetUrl ='http://'+ip+'/api/v1/workflow/getallbuildscount/'
   return fetch(targetUrl, { headers : {
    'Content-Type': 'application/json',
    'Authorization' : savedtoken
} });
}
export function getAllProductsCount() {
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
    console.log("head",headers)
   
  var targetUrl = 'http://'+ip+'/api/v1/workflow/productcount/'
  return fetch(targetUrl, { headers : {
    'Content-Type': 'application/json',
    'Authorization' : savedtoken
} });

}
export function getApproveBuildsCount() {
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
    console.log("head",headers)
   
   var targetUrl = 'http://'+ip+'/api/v1/workflow/approvedcount/'
 return fetch(targetUrl, { headers : {
    'Content-Type': 'application/json',
    'Authorization' : savedtoken
} });
}

export function getRejectedBuildsCount() {
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
    console.log("head",headers)

   var targetUrl = 'http://'+ip+'/api/v1/workflow/rejectedcount/'
  return fetch(targetUrl, { headers : {
    'Content-Type': 'application/json',
    'Authorization' : savedtoken
} });
}

export function getTriggerBranchData() {
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
    console.log("head",headers)
 
   var targetUrl = 'http://'+ip+'/api/v1/workflow/getbranches/'
  return fetch(targetUrl, { headers : {
    'Content-Type': 'application/json',
    'Authorization' : savedtoken
} });
}

export function getProductBuildDetails(producId) {
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
    console.log("head",headers)
   // console.log("product id",productId)
 
   var targetUrl = 'http://'+ip+'/api/v1/workflow/build_table/'
  return fetch(targetUrl+producId+'/', { headers : {
    'Content-Type': 'application/json',
    'Authorization' : savedtoken
},method :'post',
 });
}

export function addProduct(product) {
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
    console.log("head",headers)
    console.log("product_name",product)
 
   var targetUrl = 'http://'+ip+'/api/v1/workflow/createproduct/'
  return fetch(targetUrl, { headers : {
    'Content-Type': 'application/json',
    'Authorization' : savedtoken
},method :'post',
  body: JSON.stringify({
        product_name: product,
  })
 });

}

export function getLatestBuilds() {
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
    console.log("head",headers)
   
  var  targetUrl = 'http://'+ip+'/api/v1/workflow/latestbuilds/'
  return fetch(targetUrl, { headers : {
    'Content-Type': 'application/json',
    'Authorization' : savedtoken
},
 
 });
}

 export function getApprovedBuilds() {
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
    console.log("head",headers)
   // console.log("product_name",product)
   
   var targetUrl = 'http://'+ip+'/api/v1/workflow/approved/'
  return fetch(targetUrl, { headers : {
    'Content-Type': 'application/json',
    'Authorization' : savedtoken
},
 
 });

}

export function getRejectedBuilds() {
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
    console.log("head",headers)
   
  var targetUrl = 'http://'+ip+'/api/v1/workflow/rejected/'
  return fetch(targetUrl, { headers : {
    'Content-Type': 'application/json',
    'Authorization' : savedtoken
},
 
 });

}

export function isValidUser(){
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
  
   var targetUrl = 'http://'+ip+'/api/v1/workflow/validuser/'
  return fetch(targetUrl, { headers : {
    'Content-Type': 'application/json',
    'Authorization' : savedtoken
},
 });
}

export function getApproveBuilds(VersionId) {
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
    console.log("head",headers)
   
   var targetUrl = 'http://'+ip+'/api/v1/workflow/build/approve/'+VersionId+'/'
  return fetch(targetUrl, { headers : {
    'Content-Type': 'application/json',
    'Authorization' : savedtoken
},
 
 });

}

export function getRejecteddBuilds(VersionId) {
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
    console.log("head",headers)
  
  var  targetUrl = 'http://'+ip+'/api/v1/workflow/rejected/'+VersionId+'/'
  return fetch(targetUrl, { headers : {
    'Content-Type': 'application/json',
    'Authorization' : savedtoken
},
 
 });

}

export function triggerBuildUsingBranch(branchName,productId){
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
  
   var targetUrl = 'http://'+ip+'/api/v1/workflow/rebuild/'+branchName+'/'+productId+'/'
  return fetch(targetUrl, { headers : {
    'Content-Type': 'application/json',
    'Authorization' : savedtoken
},method :'post',
 });
}

export function triggerBuildUsingBranchfromCommitId(commitId,productId){
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
  
   var targetUrl = 'http://'+ip+'/api/v1/workflow/rebuild/'+commitId+'/'+productId+'/'
  return fetch(targetUrl, { headers : {
    'Content-Type': 'application/json',
    'Authorization' : savedtoken
},method :'post',
 });
}

export function getAllUserForAdmin(){
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
  
  var targetUrl = 'http://'+ip+'/api/v1/workflow/users/'
  return fetch(targetUrl, { headers : {
    'Content-Type': 'application/json',
    'Authorization' : savedtoken
},
 });
}


export function getbuildsPerProduct(productId){
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
   
   var targetUrl = 'http://'+ip+'/api/v1/workflow/buildcountinproduct/'+productId+'/'
  return fetch(targetUrl, { headers : {
    'Content-Type': 'application/json',
    'Authorization' : savedtoken
},method :'post',
 });
}

export function getApproveBuildsPerProduct(productId){
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
  
  var targetUrl = 'http://'+ip+'/api/v1/workflow/approvedcount/'+productId+'/'
  return fetch(targetUrl, { headers : {
    'Content-Type': 'application/json',
    'Authorization' : savedtoken
},method :'post',
 });

}

export function approveBuilds(versionidOfBranch){
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
  
  var targetUrl = 'http://'+ip+'/api/v1/workflow/build/approve/'+versionidOfBranch+'/'
  return fetch(targetUrl, { headers : {
    'Content-Type': 'application/json',
    'Authorization' : savedtoken
},method : 'post'
 });
}

export function rejectBuilds(versionidOfBranch){
    console.log("token---->",sessionStorage.getItem("token"))
    const savedtoken=sessionStorage.getItem("token")
  
   var targetUrl = 'http://'+ip+'/api/v1/workflow/build/reject/'+versionidOfBranch+'/'
  return fetch(targetUrl, { headers : {
    'Content-Type': 'application/json',
    'Authorization' : savedtoken
},method : 'post'
 });
}

export function singleBuildDetails(buildId){
  console.log("token---->",sessionStorage.getItem("token"))
  const savedtoken=sessionStorage.getItem("token")

 var targetUrl = 'http://'+ip+'/api/v1/workflow/build_details/'+buildId+'/'
return fetch(targetUrl, { headers : {
  'Content-Type': 'application/json',
  'Authorization' : savedtoken
}
});
}