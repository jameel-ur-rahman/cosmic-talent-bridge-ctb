import mockData from '../../data/mockData.json'

export default function handler(req, res) {
  // TODO: attach backend API here
  res.status(200).json({
    date: new Date().toISOString(),
    data: mockData
  })
}
