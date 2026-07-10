import { Link } from 'react-router'

export default function Nav() {
  return (
    <nav>
      <Link to="/dashboard">대시보드</Link>
      <Link to="/dashboard/stores">매장 목록</Link>
      <Link to="/dashboard/map">매장 지도</Link>
    </nav>
  )
}
