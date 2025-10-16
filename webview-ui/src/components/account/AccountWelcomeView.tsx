import { VSCodeButton, VSCodeLink } from "@vscode/webview-ui-toolkit/react"
import { useTranslation } from "react-i18next"
import { handleSignIn } from "@/context/ClineAuthContext"
import { useExtensionState } from "@/context/ExtensionStateContext"
import CoopelLogo from "../../assets/CoopelLogo"

export const AccountWelcomeView = () => {
	const { t } = useTranslation()
	const { environment } = useExtensionState()

	return (
		<div className="flex flex-col items-center pr-3">
			<CoopelLogo className="h-16 mb-4" />

			<p>{t("account.welcomeDescription")}</p>

			<VSCodeButton className="w-full mb-4" onClick={() => handleSignIn()}>
				{t("account.signUpButton")}
			</VSCodeButton>

			<p className="text-[var(--vscode-descriptionForeground)] text-xs text-center m-0">
				{t("account.termsText")} <VSCodeLink href="https://cline.bot/tos">{t("account.termsOfService")}</VSCodeLink>{" "}
				{t("account.and")} <VSCodeLink href="https://cline.bot/privacy">{t("account.privacyPolicy")}</VSCodeLink>
			</p>
		</div>
	)
}
