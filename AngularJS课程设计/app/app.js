// Èë¿ÚÎÄ¼þ
var app=angular.module("myapp",['routeJs','ngRoute']);
app.controller("mainctrl",function($scope){
	$scope.user=0;
	//添加昵称
	$scope.username='清晨';
	//添加头像
	$scope.img = "images/li.jpg";
	//添加侧栏列表
	$scope.lists = ["首页","简介"];
	//添加操作信息元素
	$scope.list2 = ["设置栏目","更多设置","分割线"];
	//显示
	$scope.listShow = false;
	$scope.tog1=function()
	{
		$scope.listShow1=!$scope.listShow1;
	}
	$scope.tog2=function()
	{
		$scope.listShow2=!$scope.listShow2;
	}
	//粉丝数量监控
	$scope.a = false;
	$scope.fans = 0;
	$scope.fansNumber = function(){
		if($scope.a == true){
			$scope.fans = $scope.fans-1;
			document.getElementById('fansNumber').value="取消关注";
			$scope.a = false;
		}
		else{
			$scope.fans = $scope.fans+1;
			document.getElementById('fansNumber').value="关注";
			$scope.a = true;
		}
	}
	//赞数监控
	$scope.b = false;
	$scope.zan = 0;
	$scope.zanNumber = function(){
		if($scope.b == true){
			$scope.zan = $scope.zan-1;
			document.getElementById("zanNumber").value="取消赞";
			$scope.b = false;
		}
		else{
			$scope.zan = $scope.zan+1;
			document.getElementById("zanNumber").value="取消赞";
			$scope.b = true;
		}
	}

//粉丝
$scope.fansName = [
   {"id":1,"name":"高小一","work":"公安局局长","img":"images/a.jpg",},
   {"id":2,"name":"杜小二","work":"人民教师","img":"images/b.jpg",},
   {"id":3,"name":"董小四","work":"程序员","img":"images/c.jpg",},
   {"id":4,"name":"王小五","work":"空姐","img":"images/d.jpg",},
   {"id":5,"name":"袁小六","work":"反贪局局长","img":"images/e.jpg",}
]

});