frappe.ui.form.on("Payment Entry",{
	setup(frm){
		frm.get_sales_items=()=>{

			let d = new frappe.ui.Dialog({
    title: 'Fetch invoice Items',
    fields: [
        {
            label: 'Sales Invoice',
            fieldname: 'invoice',
            fieldtype: 'Link',
            options: 'Sales Invoice',

        }
    ],
    primary_action_label: 'Fetch',
    primary_action(values) {
        console.log(values);

        	// call start start 
	frappe.call({
    	method: "", //dotted path to server method
    	args: values
    	callback: function(r) {
        // code snippet
        	let items= r.message.items;
        	// add recieved items 
        	items.forEach(item=>{
        	frm.add_child('items',item);

        	});
        	frm.refresh_field('items')
    }
});
	// end call
        d.hide();
    }
});
d.show();

		}
	}
	refresh(frm){
		// code here
	
frm.add_custom_button('Sales Invoice',()=>{
	frm.get_sales_items();
},'...')

	}
})

