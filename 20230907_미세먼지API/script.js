var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/B552584/ArpltnStatsSvc/getMsrstnAcctoRDyrg'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'7gpEZV105Yp6x9Fq7q3wadEQtdMDnJ5YUCi86TMqXyp1l3ox8sh7vZaN1%2BV6rNe%2BuoSVktxWkKtR4%2B%2F0CQZGwQ%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); /*응답데이터 타입*/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /*한 페이지 결과 수*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /*페이지 번호 설정*/
queryParams += '&' + encodeURIComponent('sidoName') + '=' + encodeURIComponent('경북'); /*조회 할 데이터 시도 이름 설정*/
queryParams += '&' + encodeURIComponent('searchCondition') + '=' + encodeURIComponent('DAILY'); /*데이터 기간*/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      if(this.status === 200) {
        let responsData = JSON.parse(this.responseText);
        console.log(responsData)
      } 
    }
};

xhr.send('');