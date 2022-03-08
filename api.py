import frappe
from frappe import _

@frappe.whitelist()
def get_sales_invoice(name):
	
	try:
	   doc=frappe.get_doc("Sales Invoice",name)
	except Exception as e:
	   doc=None
	   frappe.throw(_('Doctype not found'))
	return doc 