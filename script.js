(function(){
    const userNameInput = document.getElementById('user-name');
    const diagnosisButton = document.getElementById('diagnosis');
    const resultArea = document.getElementById('result-area');
    
    function removeAllChildren (element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
    
    userNameInput.onkeydown=(event)=>{
        if (event.keyCode===13) {
            diagnosisButton.onclick();
        }
    }
    
    //診断ボタンが押されたら
    diagnosisButton.onclick=()=>{
        const userName=userNameInput.value;
        if (userName.length===0) {//名前が空白の時、処理を終了
    　     return;    
        }
        
        //診断結果表示
        removeAllChildren(resultArea)
        const header = document.createElement('h2');
        header.innerText = '-診断結果-';
        resultArea.appendChild(header);

        const paragraph = document.createElement('p');
        const result = diagnosis(userName);
        paragraph.innerText = result;
        resultArea.appendChild(paragraph);

    };


    const answers = [
        '{userName}の長所は「知識」です。博識な{userName}を多くの人が頼りにしています。',
        '{userName}の長所は「自制心」です。然るべき時にしっかりと衝動を抑えられる{userName}を皆が評価しています。',
        '{userName}の長所は「思いやり」です。{userName}に優しくしてもらった多くの人が感謝しています。',
        '{userName}の長所は「情熱」です。{userName}の情熱に周りの人は感化され、動かされます。',
        '{userName}の長所は「ユニークさ」です。{userName}だけのその特徴が皆を楽しくさせ、楽しませます。',
        '{userName}の長所は「気配り」です。{userName}の配慮が多くの人を助け、救っています。',
        '{userName}の長所は「好奇心」です。新しいことに向かい、学んでいく{userName}の心構えが多くの人に魅力的に映ります。',
        '{userName}の長所は「用心深さ」です。{userName}の洞察力に、多くの人が助けられ、評価しています。',
        '{userName}の長所は「まなざし」です。{userName}に見つめられた人は、気になって仕方がないでしょう。',
        '{userName}の長所は「節度」です。強引すぎない{userName}の思考に、皆が助けられています。',
        '{userName}の長所は「感受性」です。{userName}が感じたことに皆が共感し、感動します。',
        '{userName}の長所は「決断力」です。{userName}がする決断に、多くの人が助けられています。', 
        '{userName}の長所は「その全て」です。ありのままの{userName}自身がとても魅力的です。',
        '{userName}の長所は「厳しさ」です。{userName}の厳しさが、物事を成功に導きます。',
        '{userName}の長所は「人柄」です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
        '{userName}の長所は「堅実さ」です。地道にコツコツと物事に取り組む{userName}を皆が評価しています。',
    ];


//名前の文字列を渡すと診断結果を返す
function diagnosis (userName) {
   //全文字のコード番号を取得し、それを足し合わせる
   let sumOfcharCode = 0
   for (let i=0;i<userName.length;i++) {
       sumOfcharCode = sumOfcharCode+userName.charCodeAt(i);
   }
   
   const index = sumOfcharCode % answers.length;
   let result = answers[index];   

   result = result.replace(/{userName}/g,userName);
   return result;
}


})();