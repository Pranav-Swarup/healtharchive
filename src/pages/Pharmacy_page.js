import { Card, CardContent } from "../components/Card/card"; 
import { Button } from "../components/Button/button";

const Pharmacy = () => (
    <Card className="shadow-lg p-6 rounded-xl bg-white">
      <CardContent>
        <h2 className="text-xl font-bold text-blue-600">Buy Medicines</h2>
        <Button className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Go to Pharmacy</Button>
      </CardContent>
    </Card>
  );


  export default Pharmacy;