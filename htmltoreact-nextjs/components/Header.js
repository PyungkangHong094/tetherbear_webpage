import Link from "next/link";
export default function Header() {
    return (
        <div class="section nav">
      <div class="container nav">
        <div class="nav-links-wrapper">
          <Link href="/" data-value="Introudction" className="nav-link">
            Home
          </Link>
          <Link href="/product" data-value="Resources" aria-current="page" className="nav-link w--current">
            Product
          </Link>
        </div>
        <div class="hamburger-wrapper">
          <div
            data-is-ix2-target="1"
            class="hamburger-lottie"
            data-w-id="82475569-db95-efa0-a402-81ea877a636b"
            data-animation-type="lottie"
            data-src="https://uploads-ssl.webflow.com/65e892ba99248ed5fb670277/65e892c099248ed5fb670bfd_YX7I2jQmHJ.json"
            data-loop="0"
            data-direction="1"
            data-autoplay="0"
            data-renderer="svg"
            data-default-duration="3.75"
            data-duration="3.75"
            data-ix2-initial-state="20"
          ></div>
        </div>
      </div>
    </div>
    )
}