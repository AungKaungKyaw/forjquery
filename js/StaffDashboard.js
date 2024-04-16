const input1 = document.getElementById('inputItemCode');
const input2 = document.getElementById('itemQty');
/*input1.addEventListener('submit',function (event){
    event.preventDefault();
    let inputVal = document.getElementById('inputItemCode').value();
    console.log(inputVal);
})*/

// item code enter နှိပ်လိုက်ရင် qty 1 ထားပြီး list ထဲထည့်မယ်
// qty ကိုထည့်ပြီး enter pressရင် item code ကိုကြည့်မယ်။ itemcode ရှိရင် list ထဲထည့်
//      item code မရှိရင် itemcode ထည့်ခိုင်း
var count = 1;
input1.addEventListener('keyup', function(e){
    if(e.keyCode ===13){
        let itemCode = input1.value;
        // let itemCode = input1.value();
        reqData(itemCode, function (res){
            let res1 = JSON.parse(res);
            console.log(res1);
            displayData(res1);
        })
    }
})

function reqData(itemCode, callback){
    const xhr = new XMLHttpRequest();
    const url = 'http://localhost/project1/project1/forjquery/control/reqdata.php';
    xhr.open('POST',url);
    xhr.onreadystatechange = function (){
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // console.log("xhr.responseText");
                // console.log(xhr.responseText);
                callback(xhr.responseText);
            } else {
                console.error("request fail: " + xhr.status);
                callback(null, "request fail : " + xhr.status)
            }
        }
    }
    let jsonData = JSON.stringify({
        itemCode: itemCode
    })
    console.log(jsonData);
    xhr.send(jsonData);
}
function displayData(data){
    let tr = document.createElement('tr');

    let tdCount = document.createElement('td');
    tdCount.innerText = count;
    tr.appendChild(tdCount);

    let tdProductCode = document.createElement('td');
    tdProductCode.innerText = data['ProductCode'];
    tr.appendChild(tdProductCode);

    let tdProductName = document.createElement('td');
    tdProductName.innerText = data['ProductName'];
    tr.appendChild(tdProductName);

    let tdProductPrice = document.createElement('td');
    tdProductPrice.innerText = data['ProductPrice'];
    tr.appendChild(tdProductPrice);

    count++;

    document.getElementById("tableBody").appendChild(tr);
}