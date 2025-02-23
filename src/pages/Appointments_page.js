import  { Card, CardContent } from "../components/Card/card"; 
import { Button } from "../components/Button/button";

const Appointments = () => (
  <Card className="shadow-lg p-6 rounded-xl bg-white">
    <CardContent>
      <h2 className="text-xl font-bold text-blue-600">Book an Appointment</h2>
      <Button className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Book Now</Button>
    </CardContent>
  </Card>
);


export default Appointments;