// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from "react";
import { Suspense } from "react";

import { AppLayout, Flashbar } from "@cloudscape-design/components";

import { useFederatedSignIn } from "./hooks/useFederatedSignIn";

import { amplifyConfigure } from "./util/amplifyConfigure";
import "./util/i18n";

import AppRoutes from "./appRoutes";
import Footer from "./page/partial/footer";
import SideNavigation from "./page/partial/sideNavigation";
import TopNavigation from "./page/partial/topNavigation";

export default function App() {
	amplifyConfigure();
	const currentUser = useFederatedSignIn();

	return (
		<>
			<Suspense fallback={null}>
				<TopNavigation user={currentUser} />
				<AppLayout
					navigation={<SideNavigation />}
					toolsHide
					notifications={<Flashbar items={[{ type: "warning", content: "Please ensure that you have approval from your budget holder before using this app for translation jobs that incur a cost. Your cost code must be correctly set in the app prior to submitting any translation job request. If your cost code has changed, it is your responsibility to notify the application admin at FGiordano-Silva@lambeth.gov.uk." }]} />}
					content={<AppRoutes />}
				></AppLayout>
				<Footer />
			</Suspense>
		</>
	);
}
