import { Card, CardContent } from "../components/Card/card"; 

const FamilyTracker = () => (
  <Card className="shadow-lg p-6 rounded-xl bg-white">
    <CardContent>
      <h2 className="text-xl font-bold text-blue-600">Select Family Member</h2>
      <select className="w-full p-2 border rounded bg-gray-100">
        <option>Self</option>
        <option>Parent</option>
        <option>Child</option>
      </select>
    </CardContent>
  </Card>
);

export default FamilyTracker;