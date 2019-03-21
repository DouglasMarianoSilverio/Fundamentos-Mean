(function(){
angular.module('primeiraApp').factory('tabs',[TabsFactory])
function TabsFactory(){
    function show(owner,{
        tabList = false,
        tabCreate = false,
        tabUpdate = false,
        tabDelete = false

    }){
        console.log('passou pela tabsFactory')
        console.log('tablist'+tabList)
        console.log('tabCreate'+tabCreate)
        console.log('tabUpdate'+tabUpdate)
        console.log('tabDelete'+tabDelete)     

        owner.tabList = tabList
        owner.tabCreate = tabCreate
        owner.tabUpdate = tabUpdate     
        owner.tabDelete = tabDelete

        console.log('owner.tablist '+owner.tabList)
        console.log('owner.tabCreate '+owner.tabCreate)
        console.log('owner.tabUpdate '+owner.tabUpdate)
        console.log('owner.tabDelete '+owner.tabDelete)     

        console.log('saiu tabsFactory')
    }

    return { show }

}
})()