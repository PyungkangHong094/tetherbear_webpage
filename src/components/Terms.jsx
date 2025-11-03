import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
            Legal Document
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent">
            Terms and Conditions
          </h1>
          <p className="text-xl text-gray-600 mb-2">이용 약관</p>
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
            <div className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. 서비스 약관의 목적
              </h2>
              <p className="text-gray-600 leading-relaxed">
                본 약관은 테더베어(TetherBear, 이하 "서비스")의 이용과 관련된
                조건, 사용자 권리 및 의무, 회사의 책임을 규정합니다. 사용자는 본
                약관에 동의함으로써 서비스 이용이 가능합니다.
              </p>
            </div>

            {/* Section 2 */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. 용어의 정의
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-700">"회사"</strong>란 서비스를
                  제공하는 테더베어(TetherBear)를 의미합니다.
                </li>
                <li className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-700">"사용자"</strong>란 본
                  약관에 따라 서비스를 이용하는 개인 또는 법인을 의미합니다.
                </li>
                <li className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-700">"콘텐츠"</strong>란 텍스트,
                  이미지, 차트, 지표 등 서비스 내에서 제공되거나 사용자가
                  업로드하는 모든 자료를 의미합니다.
                </li>
                <li className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-700">"레퍼럴"</strong>이란 회원이
                  추천코드를 통해 다른 사용자를 초대하여 보상을 받을 수 있는
                  제도를 말합니다.
                </li>
                <li className="bg-blue-50 p-4 rounded-lg">
                  <strong className="text-blue-700">"페이백"</strong>이란 회사가
                  정한 기준에 따라 일정 비율의 보상을 이용자에게 지급하는 행위를
                  말합니다.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="border-l-4 border-green-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. 서비스 이용 계약
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                회원가입 및 서비스 이용 절차를 설명합니다. 사용자는 회사가 정한
                절차에 따라 회원가입을 완료해야 하며, 특정 조건을 충족하지 못할
                경우 승인을 거부할 수 있습니다.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span>
                    사용자는 정확한 정보를 제공하여 회원가입을 신청해야 합니다.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span>
                    회사는 가입 신청에 대해 승인, 보류 또는 거부할 수 있습니다.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span>이용 계약은 회사의 승인과 동시에 성립됩니다.</span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="border-l-4 border-red-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. 사용자 계정 및 보안
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                사용자는 계정 정보를 타인과 공유할 수 없으며, 계정 보안 유지
                책임은 사용자에게 있습니다. 문제가 발생할 경우 즉시 회사에
                통보해야 합니다.
              </p>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-700">
                  <strong>주의:</strong> 계정 정보 유출로 인한 손해는 사용자
                  본인의 책임입니다. 비밀번호는 주기적으로 변경하고 타인과
                  공유하지 마세요.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="border-l-4 border-yellow-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. 서비스 이용 제한
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                회사는 이용자가 법령을 위반하거나 부정한 방법으로 서비스를
                이용할 경우 서비스 제공을 제한할 수 있습니다.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">•</span>
                  <span>타인의 정보를 무단으로 사용하는 행위</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">•</span>
                  <span>시스템을 해킹하거나 서비스 운영을 방해하는 행위</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">•</span>
                  <span>
                    부정한 방법으로 레퍼럴 또는 페이백을 악용하는 행위
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">•</span>
                  <span>법령에 위반되거나 타인의 권리를 침해하는 행위</span>
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="border-l-4 border-indigo-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. 서비스 제공 및 변경
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                회사는 지속적이고 안정적인 서비스를 제공하기 위해 최선을
                다합니다. 기술적 필요나 운영상의 이유로 서비스 내용을 변경할 수
                있으며, 변경 사항은 사전에 공지됩니다.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-3 mt-1">•</span>
                  <span>
                    실시간 차트, 보조지표, 기술적 분석, 레퍼럴 및 페이백 시스템
                    등 다양한 서비스를 제공합니다.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-3 mt-1">•</span>
                  <span>
                    서비스는 기술적 문제나 운영상의 필요에 따라 사전 공지 후
                    변경 또는 중단될 수 있습니다.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-3 mt-1">•</span>
                  <span>
                    회사는 무료로 제공되는 서비스의 일부 또는 전부를 수정,
                    중단할 수 있으며, 이에 대해 별도의 보상 의무는 없습니다.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="border-l-4 border-pink-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. 요금 및 결제
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                유료 서비스는 사전에 명시된 요금 기준에 따라 청구됩니다. 결제 후
                환불은 회사의 환불 정책에 따라 처리됩니다.
              </p>
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>환불 정책:</strong> 디지털 콘텐츠 특성상 구매 후 즉시
                  제공되는 서비스는 환불이 제한될 수 있습니다. 단, 서비스 하자나
                  오류가 있는 경우 고객지원을 통해 해결해드립니다.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="border-l-4 border-teal-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. 레퍼럴 및 페이백 제도
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="bg-teal-50 p-4 rounded-lg">
                  회사는 이용자가 추천코드를 통해 신규 회원을 초대할 경우, 내부
                  정책에 따라 일정 비율의 보상을 지급할 수 있습니다.
                </li>
                <li className="bg-teal-50 p-4 rounded-lg">
                  페이백 금액 및 지급 주기는 회사의 정책에 따라 변동될 수
                  있으며, 그 내용은 서비스 내 공지사항을 통해 안내됩니다.
                </li>
                <li className="bg-teal-50 p-4 rounded-lg">
                  부정한 방법으로 레퍼럴 또는 페이백을 악용한 경우, 해당 계정은
                  정지되거나 보상이 회수될 수 있습니다.
                </li>
              </ul>
            </div>

            {/* Section 9 */}
            <div className="border-l-4 border-cyan-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. 콘텐츠 관리
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                사용자는 자신이 업로드한 콘텐츠에 대한 권리를 보유하며, 회사는
                콘텐츠의 무단 사용을 금지합니다. 법령 위반 또는 타인의 권리를
                침해하는 콘텐츠는 삭제될 수 있습니다.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-3 mt-1">•</span>
                  <span>사용자는 업로드한 콘텐츠에 대한 책임을 집니다.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-3 mt-1">•</span>
                  <span>
                    회사는 서비스 제공을 위해 필요한 범위 내에서 콘텐츠를 사용할
                    수 있습니다.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-3 mt-1">•</span>
                  <span>
                    불법적이거나 부적절한 콘텐츠는 사전 통보 없이 삭제될 수
                    있습니다.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 10 */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. 개인정보 보호
              </h2>
              <p className="text-gray-600 leading-relaxed">
                회사는 「개인정보 보호법」에 따라 사용자의 개인정보를 보호하며,
                자세한 사항은 회사의
                <a
                  href="/privacy"
                  className="text-blue-600 hover:underline font-semibold ml-1"
                >
                  개인정보처리방침
                </a>
                에서 확인할 수 있습니다.
              </p>
            </div>

            {/* Section 11 */}
            <div className="border-l-4 border-violet-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. 면책 조항
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                회사는 천재지변, 시스템 장애 등 불가항력적인 사유로 서비스를
                제공하지 못하는 경우 책임을 지지 않습니다.
              </p>
              <div className="bg-violet-50 p-4 rounded-lg space-y-2">
                <p className="text-gray-700">
                  • 회원이 서비스 이용 중 타 회원 또는 제3자와의 거래에서 발생한
                  손해는 본인의 책임입니다.
                </p>
                <p className="text-gray-700">
                  • 서비스 내 제공되는 기술적 지표 및 데이터는 투자 참고용이며,
                  투자결과에 대한 책임은 이용자 본인에게 있습니다.
                </p>
                <p className="text-gray-700">
                  • 천재지변, 통신 장애, 서버 오류 등 불가항력적인 사유로 인해
                  발생한 손해에 대해서는 책임을 지지 않습니다.
                </p>
              </div>
            </div>

            {/* Section 12 */}
            <div className="border-l-4 border-red-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. 이용자의 책임
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                사용자는 서비스 이용 중 법령과 본 약관을 준수해야 합니다.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span>
                    사용자는 타인의 권리를 침해하지 않으며, 서비스 운영을
                    방해하지 않습니다.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span>
                    회원은 자신의 계정 정보를 안전하게 관리해야 하며, 이를
                    제3자에게 양도하거나 대여할 수 없습니다.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span>
                    법령과 본 약관을 위반한 경우 모든 책임은 사용자에게
                    있습니다.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 13 */}
            <div className="border-l-4 border-green-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                13. 이용계약의 해지 및 제한
              </h2>
              <p className="text-gray-600 leading-relaxed">
                회원은 언제든지 서비스 내 설정을 통해 계정을 해지할 수 있으며,
                회사는 약관 위반, 부정 이용 등의 사유가 있는 경우 사전 통보 후
                이용을 제한할 수 있습니다.
              </p>
            </div>

            {/* Section 14 */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                14. 약관 변경
              </h2>
              <p className="text-gray-600 leading-relaxed">
                회사는 법령 변경이나 운영상의 이유로 약관을 변경할 수 있으며,
                변경 사항은 사전에 공지합니다. 사용자가 변경된 약관에 동의하지
                않을 경우 서비스 이용 계약을 해지할 수 있습니다. 변경 시 시행
                7일 전에 공지사항 또는 이메일을 통해 안내합니다.
              </p>
            </div>

            {/* Section 15 */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                15. 분쟁 해결 및 관할 법원
              </h2>
              <p className="text-gray-600 leading-relaxed">
                회사와 사용자 간의 분쟁은 신의성실의 원칙에 따라 해결합니다.
                분쟁이 해결되지 않을 경우 관할 법원은 회사의 본사 소재지를
                기준으로 하며, 대한민국 법을 따릅니다. 소송이 필요한 경우 회사의
                본사 소재지를 관할하는 법원을 제1심 법원으로 합니다.
              </p>
            </div>

            {/* Section 16 */}
            <div className="border-l-4 border-pink-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                16. 연락처
              </h2>
              <div className="bg-pink-50 p-6 rounded-lg space-y-2 text-gray-700">
                <p>본 약관과 관련된 문의는 아래로 연락해 주세요.</p>
                <p>
                  <strong>이메일:</strong>{" "}
                  <a
                    href="mailto:support@tetherbear.app"
                    className="text-blue-600 hover:underline"
                  >
                    support@tetherbear.app
                  </a>
                </p>
              </div>
            </div>

            {/* Section 17 - 부칙 */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl border-2 border-purple-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">부칙</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                본 약관은 2025년 11월 3일부터 시행됩니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>공고일:</strong> 2025년 11월 3일
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
