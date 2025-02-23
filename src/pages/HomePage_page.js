import { Card, CardContent } from "../components/Card/card"; 

const HomePage = () => (
  <Card className="shadow-lg p-6 rounded-xl bg-white">
    <CardContent>

      <h1 className="text-2xl font-bold text-center text-blue-600">Welcome to Health Archive</h1>
      <p className="text-gray-600 text-center">Monitor health records, {"\n"}book appointments, and purchase medicines easily.</p>
      <p>Login to get started!</p>
    </CardContent>
  </Card>
);


export default HomePage;