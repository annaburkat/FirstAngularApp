angular.module('eggly', [])
	.controller('mainController', function($scope) {
		$scope.categories = [{
				"id": 0,
				"name": "Development"
			},
			{
				"id": 1,
				"name": "Design"
			},
			{
				"id": 2,
				"name": "UX"
			},
			{
				"id": 3,
				"name": "WordPress"
			},
			{
				"id": 4,
				"name": "C#"
			},
			{
				"id": 5,
				"name": "Python"
			}
		];
		$scope.bookmarks = [{
				"id": 0,
				"title": "AngularJS",
				"url": "https://www.onet.pl/",
				"category": "Development"
			},
			{
				"id": 1,
				"title": "YT",
				"url": "https://www.onet.pl/",
				"category": "Design"
			},
			{
				"id": 2,
				"title": "Deep jump in C#",
				"url": "https://www.onet.pl/",
				"category": "C#"
			},
			{
				"id": 3,
				"title": "Cos prostego",
				"url": "https://www.onet.pl/",
				"category": "UX"
			},
			{
				"id": 4,
				"title": "New Python",
				"url": "https://www.onet.pl/",
				"category": "Python"
			},
			{
				"id": 5,
				"title": "Yellow",
				"url": "https://www.onet.pl/",
				"category": "Design"
			},
			{
				"id": 6,
				"title": "Plugins",
				"url": "https://www.onet.pl/",
				"category": "WordPress"
			}
		];

		$scope.currentCategory = null;

		function setCurrentCategory(category){
			$scope.currentCategory = category;
		};

		function isCurrentCategory(category) {
			return $scope.currentCategory !== null && category.name == $scope.currentCategory.name;
		}

		function isDesignCategory(category) {
			return $scope.currentCategory !== null && $scope.currentCategory.name == "Design";
		}

		//making function public
		$scope.setCurrentCategory = setCurrentCategory;

		$scope.isCurrentCategory = isCurrentCategory;

		$scope.isDesignCategory = isDesignCategory;
	})
