window.onload = function()
{
    var arr = document.getElementsByTagName('a');
    for(var i = 0 ; i < arr.length ; i++)
    {
        arr[i].onclick = function()
        {
            if(this.id == '1')
            {
                document.getElementById("box1").style.display = 'block';
                document.getElementById("box2").style.display = 'none';
                document.getElementById("box3").style.display = 'none';
                document.getElementById("box4").style.display = 'none';
                document.getElementById("box5").style.display = 'none';
                document.getElementById("box6").style.display = 'none';
            }
            else if (this.id == '2')
            {
                document.getElementById("box1").style.display = 'none';
                document.getElementById("box2").style.display = 'block';
                document.getElementById("box3").style.display = 'none';
                document.getElementById("box4").style.display = 'none';
                document.getElementById("box5").style.display = 'none';
                document.getElementById("box6").style.display = 'none';
            }
            else if (this.id == '3')
            {
                document.getElementById("box1").style.display = 'none';
                document.getElementById("box2").style.display = 'none';
                document.getElementById("box3").style.display = 'block';
                document.getElementById("box4").style.display = 'none';
                document.getElementById("box5").style.display = 'none';
                document.getElementById("box6").style.display = 'none';
            }
            else if (this.id == '4')
            {
                document.getElementById("box1").style.display = 'none';
                document.getElementById("box2").style.display = 'none';
                document.getElementById("box3").style.display = 'none';
                document.getElementById("box4").style.display = 'block';
                document.getElementById("box5").style.display = 'none';
                document.getElementById("box6").style.display = 'none';
            }
            else if (this.id == '5')
            {
                document.getElementById("box1").style.display = 'none';
                document.getElementById("box2").style.display = 'none';
                document.getElementById("box3").style.display = 'none';
                document.getElementById("box4").style.display = 'none';
                document.getElementById("box5").style.display = 'block';
                document.getElementById("box6").style.display = 'none';
            }
            else 
            {
                document.getElementById("box1").style.display = 'none';
                document.getElementById("box2").style.display = 'none';
                document.getElementById("box3").style.display = 'none';
                document.getElementById("box4").style.display = 'none';
                document.getElementById("box5").style.display = 'none';
                document.getElementById("box6").style.display = 'block';
            }
        }
    }
}

// 定义答案
const answers = {
    q1: 'b',
    q2: '<sub></sub>',
    q3: 'd'
  };

  // 监听表单的提交事件
  const form = document.getElementById('quiz_form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为
    const formData = new FormData(form);
    let score = 0;
    for (let answer in answers) {
      if (formData.get(answer) === answers[answer]) {
        score++;
      }
    }
    alert(`你的得分是${score}分！`); // 显示得分
  });