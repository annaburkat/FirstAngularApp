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

		function setCurrentCategory(category) {
			$scope.currentCategory = category;

			// $scope.isCreating = false;
			// $scope.isEditing = false;

			cancelCreating();
			cancelEditing();
		};

		function isCurrentCategory(category) {
			return $scope.currentCategory !== null && category.name == $scope.currentCategory.name;
		}

		function isDesignCategory(category) {
			return $scope.currentCategory !== null && $scope.currentCategory.name == "Design";
		}

		function isPythonCategory(category) {
			return $scope.currentCategory !== null && $scope.currentCategory.name == "Python";
		}

		//making function public
		$scope.setCurrentCategory = setCurrentCategory;
		$scope.isCurrentCategory = isCurrentCategory;
		$scope.isDesignCategory = isDesignCategory;
		$scope.isPythonCategory = isPythonCategory;


		////////creating and editing states///////////
		$scope.isCreating = false;
		$scope.isEditing = false;

		function startCreating() {
			$scope.isCreating = true;
			$scope.isEditing = false;

			resetCreateForm();
		}

		function cancelCreating() {
			$scope.isCreating = false;
		}

		function startEditing() {
			$scope.isCreating = false;
			$scope.isEditing = true;

		}

		function cancelEditing() {
			$scope.isEditing = false;

			$scope.editedBookmark = null;
		}

		function shouldShowCreating() {
			return $scope.currentCategory && !$scope.isEditing;
		}

		function shouldShowEditing() {
			return $scope.isEditing && !$scope.isCreating;
		}

		//making function public
		$scope.startCreating = startCreating;
		$scope.cancelCreating = cancelCreating;
		$scope.startEditing = startEditing;
		$scope.cancelEditing = cancelEditing;
		$scope.shouldShowEditing = shouldShowEditing;
		$scope.shouldShowCreating = shouldShowCreating;


		//////crud - create, update, delete////////////
		//take a new bookmark and set to default state
		function resetCreateForm() {
			$scope.newBookmark = {
				id: '',
				title: '',
				url: '',
				category: $scope.currentCategory.name
			}
		};

		function createBookmark(bookmark) {
			bookmark.id = $scope.bookmarks.length;
			$scope.bookmarks.push(bookmark);

			resetCreateForm();
		}

		//making function public
		$scope.createBookmark = createBookmark;


		///////update/////////
		$scope.editedBookmark = null;

		function setEditedBookmark(bookmark) {
			$scope.editedBookmark = angular.copy(bookmark);
		}

		function updateBookmark(bookmark) {
			var index = _.findIndex($scope.bookmarks, function(b){
				return b.id == bookmark.id;
			});

			$scope.bookmarks[index] = bookmark;

			$scope.editedBookmark = null;
			$scope.isEditing = false;
		}

		function isSelectedBookmark(bookmarkId) {
			return $scope.editedBookmark !== null && $scope.editedBookmark.id == bookmarkId;
		}


		$scope.setEditedBookmark = setEditedBookmark;
		$scope.updateBookmark = updateBookmark;
		$scope.isSelectedBookmark = isSelectedBookmark;



		////delete////
		function deleteBookmark(bookmark) {
			_.remove($scope.bookmarks, function(o) {
				return o.id == bookmark.id;
			});
		}


		$scope.deleteBookmark = deleteBookmark;

	});
