export default function Footer() {
  return (
    <footer className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h3 className="font-semibold mb-3">Order Management</h3>
        <ul className="space-y-2 text-sm text-gray-500">
          <li>Track Orders</li>
          <li>Order History</li>
          <li>Returns</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-3">Business Settings</h3>
        <ul className="space-y-2 text-sm text-gray-500">
          <li>Profile</li>
          <li>Billing</li>
          <li>Notifications</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-3">Help Center</h3>
        <ul className="space-y-2 text-sm text-gray-500">
          <li>FAQs</li>
          <li>Contact Support</li>
          <li>Knowledge Base</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-3">Legal</h3>
        <ul className="space-y-2 text-sm text-gray-500">
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </footer>
  );
}
