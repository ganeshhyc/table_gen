app.controller("landingCtrl",function($scope){
    $scope._toggleFlag = true;                //edit toggler
    $scope._counter_id = 0;                  //column id (inc)
    $scope._row_id = 0;                     //row id (inc)      
    $scope._rowData = new Array();
    $scope._columnData = new Array();
    $scope._toggleEdit = function(){            //make or edit table
        $scope._toggleFlag = !$scope._toggleFlag;
    }
    
    $scope.options = {
        "colDef" : colDef,
        "data" : $scope._rowData,
        "colData" : $scope._columnData
    };

    $scope.table = new MyTable($scope.options);

    $scope._columns = $scope.table.colDef;                  //configuring col data
    $scope._makeColumn = function(_column){
        $scope._columnData = $scope.table._makeColumn({
                                                        "id" : $scope._counter_id++,
                                                        "label" : _column.label,
                                                        "type" : _column.type
                                                    });
    }

    $scope.addRows = function(){                //make new row
        $scope._rowData = $scope.table.addRows();
    };

    $scope._deleteCol = function(_col_id){      //delete col
        $scope._columnData = $scope.table._deleteCol(_col_id);
    }
    $scope.deleteRows = function(_row_id){      //delete row
        $scope._rowData = $scope.table.deleteRows(_row_id);
    }
    $scope._inputData = function(_parent, _id,_type,_data){ // edit row data
        $scope._rowData = this.table._inputData(_parent, _id,_type,_data)
    }

})