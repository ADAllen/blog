css复习整理
###文档流
 行高的默认高度是字体设计时有设计师决定的
 多行中文文本对齐text-align：justify 
 ####css常用代码（尽量背过）
 清除浮动：
 .claerfix::after{
     content:"";
     display:block;
     cllear:both;
 }

 单行文本超出设定宽度后超出部分用···代替：
 div{
     overflow:hidden;
     white-space:nowrap;
     text-overflow:ellipsis;

 }
 
 多行文本省略号
 div{
     display:webkt-box;
     -webkit-line-clamp:2; //超过两行的部分在第二行末尾用...代替
     -webkit-box-orient:vertial;
     overflow:hidden;
 }

