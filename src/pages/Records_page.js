import { Card, CardContent } from "../components/Card/card"; 
import img2 from "../assets/testdata.png"

const Records = () => (
  <Card className="shadow-lg p-6 rounded-xl bg-white">
    <CardContent>
      <h2 className="text-xl font-bold text-blue-600">Past Patient Records</h2>
      <img src={img2} alt="Example Records" className="records-image" />
      <p className="text-gray-600">View your past medical records here.</p>
    </CardContent>
  </Card>
);

export default Records;