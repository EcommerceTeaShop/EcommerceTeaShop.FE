import { useState, useEffect } from "react";

const STEPS = {
  FORGOT: "forgot",
  VERIFY: "verify",
  NEW_PASSWORD: "new_password",
  SUCCESS: "success",
};

function EyeIcon({ open }) {
  return open ? (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3l18 18M10.477 10.485A3 3 0 0013.5 13.5M6.228 6.228A10.45 10.45 0 002.458 12C3.732 16.057 7.523 19 12 19c1.98 0 3.82-.57 5.372-1.556M9.878 9.878A3 3 0 0014.12 14.12M17.773 17.772A10.45 10.45 0 0021.542 12C20.268 7.943 16.477 5 12 5c-1.042 0-2.046.174-2.984.492"
      />
    </svg>
  );
}

function PasswordStrength({ password }) {
  const getStrength = (p) => {
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;
    return score;
  };
  const strength = getStrength(password);
  const labels = ["", "Yếu", "Tạm", "Tốt", "Mạnh"];
  const colors = ["", "#ef4444", "#f59e0b", "#84cc16", "#13ec37"];
  const widths = ["0%", "25%", "50%", "75%", "100%"];
  if (!password) return null;
  return (
    <div className="mt-2 space-y-1">
      <div className="h-1 w-full rounded-full bg-gray-200 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: widths[strength], backgroundColor: colors[strength] }}
        />
      </div>
      <p className="text-xs font-medium" style={{ color: colors[strength] }}>
        {labels[strength]}
      </p>
    </div>
  );
}

export default function ForgotPassword() {
  const [step, setStep] = useState(STEPS.FORGOT);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  useEffect(() => {
    if (resendTimer > 0) {
      const t = setTimeout(() => setResendTimer((r) => r - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [resendTimer]);

  const handleCodeChange = (i, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...code];
    next[i] = val;
    setCode(next);
    if (val && i < 5) document.getElementById(`otp-${i + 1}`)?.focus();
  };

  const handleCodeKeyDown = (i, e) => {
    if (e.key === "Backspace" && !code[i] && i > 0)
      document.getElementById(`otp-${i - 1}`)?.focus();
  };

  const handleCodePaste = (e) => {
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (pasted.length) {
      setCode(pasted.split("").concat(Array(6).fill("")).slice(0, 6));
      document.getElementById(`otp-${Math.min(pasted.length, 5)}`)?.focus();
      e.preventDefault();
    }
  };

  const passwordsMatch = password && confirm && password === confirm;
  const passwordError = confirm && password !== confirm;

  const inputBase =
    "block w-full rounded-lg border-0 py-3 text-[#0d1b10] shadow-sm ring-1 ring-inset ring-[#e7f3e9] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#13ec37] bg-white sm:text-sm sm:leading-6 transition-all outline-none";

  return (
    <div
      style={{ fontFamily: "'Work Sans', sans-serif" }}
      className="flex min-h-screen w-full bg-[#f8fcf9] text-[#0d1b10]"
    >
      {/* ── Left panel ── */}
      <div className="flex w-full flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-[#f8fcf9] lg:w-1/2">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          {/* Logo */}
          <div className="mb-10">
            <div className="flex items-center gap-3 text-[#0d1b10] mb-6">
              <div className="flex w-10 h-10 items-center justify-center rounded-full bg-[#13ec37]/20 text-[#13ec37]">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M20 3H4v10c0 3.309 2.691 6 6 6h4c3.309 0 6-2.691 6-6V9h2V7h-2V3zm-2 10c0 2.206-1.794 4-4 4h-4c-2.206 0-4-1.794-4-4V5h12v8z" />
                  <path d="M9 21h6v2H9z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold tracking-tight">Cửa hàng trà</h1>
            </div>

            {step === STEPS.FORGOT && (
              <>
                <h2 className="text-3xl font-bold tracking-tight text-[#0d1b10]">
                  Quên mật khẩu?
                </h2>
                <p className="mt-2 text-sm text-[#4c9a59]">
                  Nhập địa chỉ email liên kết với tài khoản và chúng tôi sẽ gửi
                  mã xác minh.
                </p>
              </>
            )}
            {step === STEPS.VERIFY && (
              <>
                <h2 className="text-3xl font-bold tracking-tight text-[#0d1b10]">
                  Kiểm tra email
                </h2>
                <p className="mt-2 text-sm text-[#4c9a59]">
                  Chúng tôi đã gửi mã 6 chữ số tới{" "}
                  <span className="font-semibold text-[#0d1b10]">{email}</span>.
                  Hãy nhập bên dưới.
                </p>
              </>
            )}
            {step === STEPS.NEW_PASSWORD && (
              <>
                <h2 className="text-3xl font-bold tracking-tight text-[#0d1b10]">
                  Đặt mật khẩu mới
                </h2>
                <p className="mt-2 text-sm text-[#4c9a59]">
                  Chọn mật khẩu mạnh. Ít nhất 8 ký tự.
                </p>
              </>
            )}
            {step === STEPS.SUCCESS && (
              <>
                <h2 className="text-3xl font-bold tracking-tight text-[#0d1b10]">
                  Đặt lại mật khẩu thành công!
                </h2>
                <p className="mt-2 text-sm text-[#4c9a59]">
                  Mật khẩu của bạn đã được đặt lại thành công. Bây giờ bạn có thể
                  đăng nhập bằng mật khẩu mới.
                </p>
              </>
            )}
          </div>

          {/* ── FORGOT ── */}
          {step === STEPS.FORGOT && (
            <div className="mt-8">
              <div className="mt-6 space-y-6">
                <div>
                  <label
                    className="block text-sm font-medium leading-6 text-[#0d1b10]"
                    htmlFor="email"
                  >
                    Địa chỉ email
                  </label>
                  <div className="mt-2 relative rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="bạn@example.com"
                      className={`${inputBase} pl-10`}
                    />
                  </div>
                </div>
                <button
                  onClick={() => {
                    if (email) {
                      setResendTimer(60);
                      setStep(STEPS.VERIFY);
                    }
                  }}
                  disabled={!email}
                  className="flex w-full justify-center rounded-lg bg-[#13ec37] px-3 py-3 text-sm font-bold leading-6 text-[#0d1b10] shadow-sm hover:bg-[#0fd630] transition-colors active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Gửi liên kết đặt lại
                </button>
              </div>
              <div className="mt-10 flex flex-col items-center">
                <a
                  href="#"
                  className="flex items-center gap-2 font-semibold leading-6 text-[#13ec37] hover:text-[#0fd630] hover:underline"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 12H5M12 5l-7 7 7 7"
                    />
                  </svg>
                  Quay lại đăng nhập
                </a>
              </div>
            </div>
          )}

          {/* ── VERIFY ── */}
          {step === STEPS.VERIFY && (
            <div className="mt-8">
              <div className="mt-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium leading-6 text-[#0d1b10] mb-3">
                    Mã xác minh
                  </label>
                  <div className="flex gap-2 justify-between">
                    {code.map((digit, i) => (
                      <input
                        key={i}
                        id={`otp-${i}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleCodeChange(i, e.target.value)}
                        onKeyDown={(e) => handleCodeKeyDown(i, e)}
                        onPaste={handleCodePaste}
                        className="w-12 h-14 text-center text-xl font-bold rounded-lg border-0 shadow-sm ring-1 ring-inset ring-[#e7f3e9] bg-white text-[#0d1b10] transition-all outline-none focus:ring-2 focus:ring-[#13ec37]"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-center text-[#4c9a59]">
                    Chưa nhận được?{" "}
                    {resendTimer > 0 ? (
                      <span className="text-[#0d1b10] font-medium">
                        Gửi lại trong {resendTimer} giây
                      </span>
                    ) : (
                      <button
                        onClick={() => setResendTimer(60)}
                        className="font-semibold text-[#13ec37] hover:text-[#0fd630] hover:underline"
                      >
                        Gửi lại mã
                      </button>
                    )}
                  </p>
                </div>
                <button
                  onClick={() => {
                    if (code.every((d) => d)) setStep(STEPS.NEW_PASSWORD);
                  }}
                  disabled={!code.every((d) => d)}
                  className="flex w-full justify-center rounded-lg bg-[#13ec37] px-3 py-3 text-sm font-bold leading-6 text-[#0d1b10] shadow-sm hover:bg-[#0fd630] transition-colors active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Xác minh mã
                </button>
              </div>
              <div className="mt-10 flex flex-col items-center">
                <button
                  onClick={() => setStep(STEPS.FORGOT)}
                  className="flex items-center gap-2 font-semibold leading-6 text-[#13ec37] hover:text-[#0fd630] hover:underline"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 12H5M12 5l-7 7 7 7"
                    />
                  </svg>
                  Quay lại
                </button>
              </div>
            </div>
          )}

          {/* ── NEW PASSWORD ── */}
          {step === STEPS.NEW_PASSWORD && (
            <div className="mt-8">
              <div className="mt-6 space-y-6">
                <div>
                  <label
                    className="block text-sm font-medium leading-6 text-[#0d1b10]"
                    htmlFor="password"
                  >
                    Mật khẩu mới
                  </label>
                  <div className="mt-2 relative rounded-md shadow-sm">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Tối thiểu 8 ký tự"
                      className={`${inputBase} pr-10`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                    >
                      <EyeIcon open={showPassword} />
                    </button>
                  </div>
                  <PasswordStrength password={password} />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium leading-6 text-[#0d1b10]"
                    htmlFor="confirm"
                  >
                    Xác nhận mật khẩu mới
                  </label>
                  <div className="mt-2 relative rounded-md shadow-sm">
                    <input
                      id="confirm"
                      type={showConfirm ? "text" : "password"}
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)}
                      placeholder="Nhập lại mật khẩu"
                      className={`${inputBase} pr-10 ${passwordError ? "ring-red-400 focus:ring-red-500" : passwordsMatch ? "ring-[#13ec37]" : ""}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm((v) => !v)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                    >
                      <EyeIcon open={showConfirm} />
                    </button>
                  </div>
                  {passwordError && (
                    <p className="mt-1 text-xs text-red-500">
                      Mật khẩu không khớp
                    </p>
                  )}
                </div>
                <button
                  onClick={() => {
                    if (passwordsMatch && password.length >= 8)
                      setStep(STEPS.SUCCESS);
                  }}
                  disabled={!passwordsMatch || password.length < 8}
                  className="flex w-full justify-center rounded-lg bg-[#13ec37] px-3 py-3 text-sm font-bold leading-6 text-[#0d1b10] shadow-sm hover:bg-[#0fd630] transition-colors active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Đặt lại mật khẩu
                </button>
              </div>
              <div className="mt-10 flex flex-col items-center">
                <button
                  onClick={() => setStep(STEPS.VERIFY)}
                  className="flex items-center gap-2 font-semibold leading-6 text-[#13ec37] hover:text-[#0fd630] hover:underline"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 12H5M12 5l-7 7 7 7"
                    />
                  </svg>
                  Quay lại
                </button>
              </div>
            </div>
          )}

          {/* ── SUCCESS ── */}
          {step === STEPS.SUCCESS && (
            <div className="mt-8">
              <div className="mt-6 space-y-6">
                <div className="flex justify-center">
                  <div className="flex w-16 h-16 items-center justify-center rounded-full bg-[#13ec37]/20 text-[#13ec37]">
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <a
                  href="#"
                  className="flex w-full justify-center rounded-lg bg-[#13ec37] px-3 py-3 text-sm font-bold leading-6 text-[#0d1b10] shadow-sm hover:bg-[#0fd630] transition-colors active:scale-[0.99]"
                >
                  Quay lại đăng nhập
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Right image panel — identical to original ── */}
      <div className="relative hidden w-0 flex-1 lg:block bg-white">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 z-20 p-12 text-white">
          <blockquote className="space-y-2">
            <p className="text-lg font-medium italic">
              "Sự bình yên của thiên nhiên sẽ len trong bạn như ánh nắng lên trong cây."
            </p>
            <footer className="text-sm text-gray-200">— John Muir</footer>
          </blockquote>
        </div>
        <img
          alt="Lá trà xanh tươi"
          className="absolute inset-0 h-full w-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzJoYFXp5Vuo6jrFHz0xwlgRUv5ybaa5XISoU77DwNHPC78-TjmCi0rxPSFNjy37FeKsNyqEK0RVp56tBuF_XiqVXVbDocvGjXPnaAEVBFsnVJvBaIH8oON145-uq3_h7FpNnpmCqadxqzaIvMpLQ_TwUVk1ZcPB6PN_2YYQovj-R7L3GO2zFeMiEhMv-ct3_afww2KaY1tpnMgf1-FVGPs1gDgAlP8DA2de90N3DexhyxXFGmXtK36GmN0IhOveI4PfbzSiDfAKiV"
        />
      </div>
    </div>
  );
}
