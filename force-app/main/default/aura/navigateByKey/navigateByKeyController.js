({
	doInit : function(component, event, helper) {   
        addEventListener('keydown', function(event){
            if(component.get("v.disabled") === false) {
                if (event.keyCode === 13) {
                    var navigate = component.get('v.navigateFlow');
                    
                    try {
                        navigate("NEXT"); 
                    } catch (err) {
                        console.log('Type Error Navigation from navigateByKey');
                    }
                    
                }
            }
        });
    //Do something else in init
},
    //Next Function
})