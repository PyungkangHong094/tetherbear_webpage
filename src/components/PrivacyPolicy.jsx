import React from "react";
import Navbar from "./Navbar";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            Legal Document
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 mb-2">개인정보처리방침</p>
          <p className="text-sm text-gray-500">
            Last updated: November 3, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-12">
            {/* Section 1 */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. 개인정보의 처리 목적
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                테더베어(TetherBear, 이하 '회사')는 이용자의 개인정보를 소중히
                여기며, 「개인정보 보호법」을 준수합니다. 회사는
                개인정보처리방침을 통해 이용자의 개인정보가 어떻게 이용되고
                보호되는지를 안내합니다. 처리 목적은 다음과 같아요.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span>회원 가입 및 계정 관리</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span>레퍼럴(추천인) 및 페이백 보상 처리</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span>실시간 차트 및 기술적 지표, 보조지표 서비스 제공</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span>거래 이력 및 사용자 설정 저장</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span>고객 상담 및 불만처리 응대</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span>신규 서비스 개발, 맞춤형 알림 및 마케팅 활용</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span>법령 또는 서비스 이용약관에 따른 의무 이행</span>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. 처리하는 개인정보의 항목
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                회사는 서비스 제공에 필요한 최소한의 개인정보만을 수집합니다.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-700">필수항목:</strong> 이메일
                  주소, 비밀번호, 닉네임, 추천인 코드, 지갑주소 또는 결제 수단
                  식별정보
                </li>
                <li className="bg-purple-50 p-4 rounded-lg">
                  <strong className="text-purple-700">선택항목:</strong> 연락처,
                  프로필 이미지, 관심 지표 설정, 알림 수신 여부
                </li>
                <li className="bg-gray-50 p-4 rounded-lg">
                  <strong className="text-gray-700">자동수집항목:</strong> 접속
                  IP, 브라우저 정보, 기기 정보, 이용 로그(차트 조회, 보조지표
                  사용 기록 등), 쿠키
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="border-l-4 border-green-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. 개인정보의 처리 및 보유 기간
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                수집된 개인정보는 처리 목적이 달성되면 지체 없이 파기합니다. 단,
                법령상 보존 의무가 있는 경우에는 아래 기간 동안 보관합니다.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        구분
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        보존 항목
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        보존 기간
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        근거 법령
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700">
                        계약 또는 청약철회 등에 관한 기록
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        거래 및 결제 관련 내역
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-blue-600">
                        5년
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        전자상거래법
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700">
                        대금결제 및 재화 등의 공급에 관한 기록
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        결제 정보, 지급 로그
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-blue-600">
                        5년
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        전자상거래법
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700">
                        소비자의 불만 또는 분쟁처리에 관한 기록
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        상담 내역, 민원 처리 기록
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-purple-600">
                        3년
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        전자상거래법
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700">
                        접속 기록
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        로그인, 보상 지급 확인 로그
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-green-600">
                        1년
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        통신비밀보호법
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 4 */}
            <div className="border-l-4 border-red-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. 개인정보의 제3자 제공
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다.
                다만, 다음의 경우에는 예외로 합니다.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span>이용자가 사전에 명시적으로 동의한 경우</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span>법령에 따른 요청이 있는 경우</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span>수사기관이 법정 절차에 따라 요청하는 경우</span>
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="border-l-4 border-yellow-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. 개인정보 처리의 위탁
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                회사는 서비스의 원활한 운영을 위해 아래와 같이 일부 업무를
                위탁할 수 있습니다.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        위탁받는 자
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        위탁하는 업무의 내용
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        보관 위치
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700">
                        [AWS 또는 클라우드 서비스 제공업체명]
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        개인정보가 저장된 국내 서버의 관리 및 운영
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-blue-600">
                        대한민국
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700">
                        [결제 대행사명]
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        결제, 페이백 처리
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-blue-600">
                        대한민국
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700">
                        [이메일 발송 서비스 업체명]
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        회원 알림 및 서비스 공지 발송
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-blue-600">
                        대한민국
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 leading-relaxed mt-4">
                모든 수탁자는 「개인정보 보호법」에 따른 안전조치를 이행하며,
                위탁계약을 통해 개인정보 보호 의무를 명확히 규정하고 있어요.
              </p>
            </div>

            {/* Section 6 */}
            <div className="border-l-4 border-indigo-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. 정보주체의 권리와 행사 방법
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                이용자는 다음과 같은 권리를 가질 수 있어요.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-indigo-700 font-semibold">
                    • 개인정보 열람 요구
                  </p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-indigo-700 font-semibold">
                    • 오류 정정 및 수정 요구
                  </p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-indigo-700 font-semibold">• 삭제 요청</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-indigo-700 font-semibold">
                    • 처리정지 요청
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                이 권리는 앱 내 설정 메뉴 또는 고객지원 이메일(
                <a
                  href="mailto:support@tetherbear.app"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  support@tetherbear.app
                </a>
                )로 요청할 수 있으며, 회사는 10일 이내에 결과를 안내합니다.
              </p>
            </div>

            {/* Section 7 */}
            <div className="border-l-4 border-teal-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. 개인정보의 안전성 확보조치
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                회사는 이용자의 개인정보를 안전하게 보호하기 위해 다음과 같은
                조치를 취하고 있습니다.
              </p>
              <div className="space-y-3">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-teal-900">
                    <strong>관리적 조치:</strong> 내부 관리계획 수립, 정기적
                    직원 보안 교육
                  </p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-teal-900">
                    <strong>기술적 조치:</strong> 접근권한 관리, 데이터 암호화,
                    침입차단시스템 운영, 보안프로그램 설치
                  </p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-teal-900">
                    <strong>물리적 조치:</strong> 서버실, 자료보관실에 대한 출입
                    통제 및 모니터링
                  </p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-teal-900">
                    <strong>데이터 백업:</strong> 주기적 암호화 백업을 통한 손실
                    방지
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div className="border-l-4 border-pink-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. 개인정보 보호책임자
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                회사는 개인정보 처리에 관한 업무를 총괄하여 책임지고, 이용자
                문의나 불만사항을 처리하기 위해 아래와 같이 개인정보
                보호책임자를 지정하고 있습니다.
              </p>
              <div className="bg-pink-50 p-6 rounded-lg space-y-2 text-gray-700">
                <p>
                  <strong className="text-pink-700">성명:</strong> [담당자명]
                </p>
                <p>
                  <strong className="text-pink-700">직책:</strong> 개인정보
                  보호책임자 (CPO)
                </p>
                <p>
                  <strong className="text-pink-700">연락처:</strong>{" "}
                  <a
                    href="mailto:privacy@tetherbear.app"
                    className="text-blue-600 hover:underline"
                  >
                    privacy@tetherbear.app
                  </a>
                </p>
                <p>
                  <strong className="text-pink-700">주소:</strong> 서울특별시
                  [주소 입력 예정]
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. 개인정보의 파기절차 및 방법
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="bg-orange-50 p-4 rounded-lg">
                  <strong className="text-orange-700">파기절차:</strong>{" "}
                  이용자가 입력한 개인정보는 목적 달성 후 별도의 DB로 옮겨 내부
                  방침 및 관련 법령에 따라 일정 기간 저장 후 파기됩니다.
                </li>
                <li className="bg-orange-50 p-4 rounded-lg">
                  <strong className="text-orange-700">파기기한:</strong>{" "}
                  보유기간 경과 또는 목적 달성 후 5일 이내에 파기합니다.
                </li>
                <li className="bg-orange-50 p-4 rounded-lg">
                  <strong className="text-orange-700">파기방법:</strong>
                  <div className="mt-2 ml-4">
                    <p>• 전자적 파일 형태: 복구 불가능한 방식으로 완전 삭제</p>
                    <p>• 종이 문서 형태: 분쇄 또는 소각 처리</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Section 10 */}
            <div className="border-l-4 border-cyan-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. 개인정보 자동 수집 장치의 설치·운영 및 거부
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                회사는 이용자 맞춤형 서비스를 제공하기 위해 '쿠키(cookie)'를
                사용합니다.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="bg-cyan-50 p-4 rounded-lg">
                  <strong className="text-cyan-700">쿠키의 사용 목적:</strong>
                  <div className="mt-2 ml-4">
                    <p>• 접속 빈도, 방문 시간, 사용 패턴 분석</p>
                    <p>• 맞춤형 지표 추천 및 사용자 환경 유지</p>
                    <p>• 로그인 상태 유지 및 보상 기록 확인</p>
                  </div>
                </li>
                <li className="bg-cyan-50 p-4 rounded-lg">
                  <strong className="text-cyan-700">쿠키 거부 방법:</strong>
                  <div className="mt-2 ml-4">
                    <p>
                      • 웹 브라우저 설정에서 모든 쿠키 허용/차단 또는 개별 확인
                      설정 가능
                    </p>
                    <p>• 쿠키 거부 시 일부 기능 이용이 제한될 수 있어요</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Section 11 */}
            <div className="border-l-4 border-violet-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. 기술적·관리적 보호대책
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-violet-50 p-4 rounded-lg">
                  <p className="text-violet-700">
                    • 해킹 및 악성 코드 대비를 위한 보안시스템 구축
                  </p>
                </div>
                <div className="bg-violet-50 p-4 rounded-lg">
                  <p className="text-violet-700">
                    • 비밀번호 및 주요 데이터 암호화
                  </p>
                </div>
                <div className="bg-violet-50 p-4 rounded-lg">
                  <p className="text-violet-700">
                    • DB 접근 통제 및 로그 기록 유지
                  </p>
                </div>
                <div className="bg-violet-50 p-4 rounded-lg">
                  <p className="text-violet-700">
                    • 정기적인 외부 보안 점검 및 취약점 분석
                  </p>
                </div>
              </div>
            </div>

            {/* Section 12 */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. 개인정보처리방침의 변경
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-3">
                  이 개인정보처리방침은 2025년 11월 3일부터 적용됩니다.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  법령 변경이나 서비스 정책 변경 시, 변경 내용은 시행 7일 전부터
                  웹사이트 공지 또는 이메일을 통해 안내합니다.
                </p>
              </div>
            </div>

            {/* Section 13 */}
            <div className="border-l-4 border-red-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                13. 권익침해 구제방법
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                이용자는 아래 기관에 개인정보 침해에 대한 상담이나 피해구제를
                요청할 수 있습니다.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>개인정보침해신고센터</strong>
                  </p>
                  <a
                    href="https://privacy.kisa.or.kr"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    privacy.kisa.or.kr
                  </a>
                  <p className="text-gray-600 text-sm">국번없이 118</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>개인정보분쟁조정위원회</strong>
                  </p>
                  <a
                    href="https://kopico.go.kr"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    kopico.go.kr
                  </a>
                  <p className="text-gray-600 text-sm">1833-6972</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>대검찰청 사이버수사과</strong>
                  </p>
                  <a
                    href="https://spo.go.kr"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    spo.go.kr
                  </a>
                  <p className="text-gray-600 text-sm">국번없이 1301</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>경찰청 사이버안전국</strong>
                  </p>
                  <a
                    href="https://cyberbureau.police.go.kr"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    cyberbureau.police.go.kr
                  </a>
                  <p className="text-gray-600 text-sm">국번없이 182</p>
                </div>
              </div>
            </div>

            {/* Section 14 */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border-2 border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                14. 부칙
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                본 방침은 테더베어의 서비스 특성과 국내 개인정보보호법을
                반영하여 작성되었어요.
              </p>
              <p className="text-gray-700 leading-relaxed">
                회사는 이용자 정보 보호를 위해 항상 최신 보안기술을 적용하고,
                신뢰할 수 있는 데이터 환경을 유지하기 위해 최선을 다하겠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default PrivacyPolicy;
