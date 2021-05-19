import { journeysTable, getJourneys } from '../../utils/airtableOps';
import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
  origin: "https://www.directionstonowhere.com"
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async (req, res) => {
  await runMiddleware(req, res, cors)

  try {
    const journeys = await getJourneys()
    res.statusCode = 200;
    return res.json({ journeys })

  } catch (err) {
    console.log(err)
    res.statusCode = 500;
    res.json({ msg: 'Something went wrong', error: err });
  }
};
