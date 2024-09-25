// Copyright (c) 2024, Humaid and contributors
// For license information, please see license.txt

frappe.ui.form.on("Gazette Form", {
	refresh(frm) {
        
        frm.add_custom_button(__("Download PDF"), function() {
            if (!frm.is_dirty()){
                window.open("/api/method/gazette_form.gazette_form.doctype.gazette_form.gazette_form.export_pdf?gazette_form="+frm.doc.name)
            }
            
        }); 
        
	},
});
