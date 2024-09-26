async function loadLanguageData() {
	try {
		const response = await fetch('json/language.json') // Be sure to designate a file
		if (!response.ok) {
			throw new Error('Failed to load language data')
		}
		return await response.json()
	} catch (error) {
		console.error(error)
		return null
	}
}
//test git
async function selectLanguage() {
	const languageData = await loadLanguageData()
	if (!languageData) return

	const languageSelect = document.querySelector('#language-select')
	const language = languageSelect ? languageSelect.value : 'German'

	const selectedLanguageData = languageData[language]
	if (!selectedLanguageData) return

	const updateElementContent = (
		selector,
		content,
		property = 'textContent'
	) => {
		const element = document.querySelector(selector)
		if (element) {
			element[property] = content
		}
	}
	//============home============================================================================================================================================

	updateElementContent(
		'.main-page__title',
		selectedLanguageData.mainPageTitle,
		'innerHTML'
	)
	updateElementContent('.main-page__quote', selectedLanguageData.mainPageQuote)
	updateElementContent(
		'.events-page__headline',
		selectedLanguageData.eventsPageHeadline
	)
	updateElementContent(
		'.about-page__headline',
		selectedLanguageData.aboutPageHeadline
	)
	const updateContentKreationAtelier = () => {
		const searchForAllElements = [
			selectedLanguageData.contentTabsCourseHeadlineOne,
			selectedLanguageData.contentTabsCourseHeadlineTwo,
			selectedLanguageData.contentTabsCourseHeadlineThree,
			selectedLanguageData.contentTabsCourseHeadlineFour,
		]
		const searchForAllElementsDates = [
			selectedLanguageData.tableBlockDateContentTabsCourseOne,
			selectedLanguageData.tableBlockDateContentTabsCourseTwo,
			selectedLanguageData.tableBlockDateContentTabsCourseThree,
			selectedLanguageData.tableBlockDateContentTabsCourseFour,
			selectedLanguageData.tableBlockDateContentTabsCourseFive,
		]
		const searchTableBlockDateNextEvents = [
			selectedLanguageData.BlockDateNextEventsOne,
			selectedLanguageData.BlockDateNextEventsTwo,
			selectedLanguageData.BlockDateNextEventsThree,
		]
		const searchspollerFooterTopTitles = [
			selectedLanguageData.spollerFooterTopTitleOne,
			selectedLanguageData.spollerFooterTopTitleTwo,
			selectedLanguageData.spollerFooterTopTitleThree,
		]
		const searchfooterWeeks = [
			selectedLanguageData.footerWeek1,
			selectedLanguageData.footerWeek2,
			selectedLanguageData.footerWeek3,
		]
		const contentTabsCourseParahraphs = [
			selectedLanguageData.contentTabsCourseParahraphOne,
			selectedLanguageData.contentTabsCourseParahraphTwo,
			selectedLanguageData.contentTabsCourseParahraphThree,
			selectedLanguageData.contentTabsCourseParahraphFour,
		]
		const searchtableBlockDatecontentTabsCommunications = [
			selectedLanguageData.tableBlockDatecontentTabsCommunicationOne,
			selectedLanguageData.tableBlockDatecontentTabsCommunicationTwo,
		]
		const searchtableBlockDatecontentTabsCreatives = [
			selectedLanguageData.tableBlockDatecontentTabsCreativeOne,
			selectedLanguageData.tableBlockDatecontentTabsCreativeTwo,
			selectedLanguageData.tableBlockDatecontentTabsCreativeThree,
			selectedLanguageData.tableBlockDatecontentTabsCreativeFour,
		]
		const searchtabsGalleryTitles = [
			selectedLanguageData.tabsGalleryTitleOne,
			selectedLanguageData.tabsGalleryTitleTwo,
			selectedLanguageData.tabsGalleryTitleThree,
			selectedLanguageData.tabsGalleryTitleFour,
		]
		const searchcontentGalleryHeadlines = [
			selectedLanguageData.contentGalleryHeadlineOne,
			selectedLanguageData.contentGalleryHeadlineTwo,
			selectedLanguageData.contentGalleryHeadlineThree,
			selectedLanguageData.contentGalleryHeadlineFour,
		]
		const searchParahraphPrivacyText = [
			selectedLanguageData.parahraphPrivacyText1,
			selectedLanguageData.parahraphPrivacyText2,
			selectedLanguageData.parahraphPrivacyText3,
			selectedLanguageData.parahraphPrivacyText4,
			selectedLanguageData.parahraphPrivacyText5,
			selectedLanguageData.parahraphPrivacyText6,
			selectedLanguageData.parahraphPrivacyText7,
			selectedLanguageData.parahraphPrivacyText8,
			selectedLanguageData.parahraphPrivacyText9,
			selectedLanguageData.parahraphPrivacyText10,
			selectedLanguageData.parahraphPrivacyText11,
			selectedLanguageData.parahraphPrivacyText12,
			selectedLanguageData.parahraphPrivacyText13,
			selectedLanguageData.parahraphPrivacyText14,
			selectedLanguageData.parahraphPrivacyText15,
			selectedLanguageData.parahraphPrivacyText16,
			selectedLanguageData.parahraphPrivacyText17,
			selectedLanguageData.parahraphPrivacyText18,
			selectedLanguageData.parahraphPrivacyText19,
			selectedLanguageData.parahraphPrivacyText20,
			selectedLanguageData.parahraphPrivacyText21,
			selectedLanguageData.parahraphPrivacyText22,
			selectedLanguageData.parahraphPrivacyText23,
			selectedLanguageData.parahraphPrivacyText24,
			selectedLanguageData.parahraphPrivacyText25,
			selectedLanguageData.parahraphPrivacyText26,
			selectedLanguageData.parahraphPrivacyText27,
		]
		const searchprivacyHeadline = [
			selectedLanguageData.privacyHeadline1,
			selectedLanguageData.privacyHeadline2,
			selectedLanguageData.privacyHeadline3,
			selectedLanguageData.privacyHeadline4,
			selectedLanguageData.privacyHeadline5,
			selectedLanguageData.privacyHeadline6,
			selectedLanguageData.privacyHeadline7,
			selectedLanguageData.privacyHeadline8,
			selectedLanguageData.privacyHeadline9,
			selectedLanguageData.privacyHeadline10,
			selectedLanguageData.privacyHeadline11,
			selectedLanguageData.privacyHeadline12,
		]
		const searchprivacyIntro = [
			selectedLanguageData.privacyIntro1,
			selectedLanguageData.privacyIntro2,
			selectedLanguageData.privacyIntro3,
			selectedLanguageData.privacyIntro4,
			selectedLanguageData.privacyIntro5,
			selectedLanguageData.privacyIntro6,
			selectedLanguageData.privacyIntro7,
			selectedLanguageData.privacyIntro8,
			selectedLanguageData.privacyIntro9,
			selectedLanguageData.privacyIntro10,
			selectedLanguageData.privacyIntro11,
			selectedLanguageData.privacyIntro12,
			selectedLanguageData.privacyIntro13,
		]
		const searchPrivacyHeadlineList = [
			selectedLanguageData.privacyHeadlineList1,
		]
		const searchParahraphGordonText = [
			selectedLanguageData.parahraphGordonText1,
			selectedLanguageData.parahraphGordonText2,
			selectedLanguageData.parahraphGordonText3,
			selectedLanguageData.parahraphGordonText4,
			selectedLanguageData.parahraphGordonText5,
			selectedLanguageData.parahraphGordonText6,
			selectedLanguageData.parahraphGordonText7,
			selectedLanguageData.parahraphGordonText8,
			selectedLanguageData.parahraphGordonText9,
			selectedLanguageData.parahraphGordonText10,
			selectedLanguageData.parahraphGordonText11,
			selectedLanguageData.parahraphGordonText12,
			selectedLanguageData.parahraphGordonText13,
		]
		const searchGordonPageHeadlineList = [
			selectedLanguageData.gordonPageHeadlineList1,
			selectedLanguageData.gordonPageHeadlineList2,
		]
		const searchGordonPageText = [
			selectedLanguageData.gordonPageText1,
			selectedLanguageData.gordonPageText2,
		]
		const searchGordonPageHeadline = [
			selectedLanguageData.gordonPageHeadline1,
			selectedLanguageData.gordonPageHeadline2,
			selectedLanguageData.gordonPageHeadline3,
			selectedLanguageData.gordonPageHeadline4,
			selectedLanguageData.gordonPageHeadline5,
			selectedLanguageData.gordonPageHeadline6,
		]
		const menuLinks = document.querySelectorAll('.menu__link')
		const bodyFooterSpollerLinks = document.querySelectorAll(
			'.body-f-spoller__link--1'
		)

		// Go through all the headers and buttons
		searchForAllElements.forEach((searchForAllElement, i) => {
			let findingheadlin = `.content-tabs-course__headline--${i + 1}`
			let findingbutton = `.tabs-course__title--${i + 1}`

			updateElementContent(findingheadlin, searchForAllElement)
			updateElementContent(findingbutton, searchForAllElement)
		})
		searchForAllElementsDates.forEach((searchForAllElementsDate, i) => {
			let findingTableDateContent = `.table-block__date--content-tabs-course-${
				i + 1
			}`

			updateElementContent(findingTableDateContent, searchForAllElementsDate)
		})
		searchTableBlockDateNextEvents.forEach(
			(searchTableBlockDateNextEvent, i) => {
				let findingTableBlockDateNextEvent = `.table-block__date--next-events-${
					i + 1
				}`

				updateElementContent(
					findingTableBlockDateNextEvent,
					searchTableBlockDateNextEvent
				)
			}
		)
		searchspollerFooterTopTitles.forEach((searchspollerFooterTopTitle, i) => {
			let findingspollerFooterTopTitle = `.spoller-f-top__title--${i + 1}`

			updateElementContent(
				findingspollerFooterTopTitle,
				searchspollerFooterTopTitle
			)
		})
		selectedLanguageData.menuText.forEach((menuLink, i) => {
			if (menuLinks[i]) {
				menuLinks[i].textContent = menuLink
			}
			if (bodyFooterSpollerLinks[i]) {
				bodyFooterSpollerLinks[i].textContent = menuLink
			}
		})
		searchfooterWeeks.forEach((searchfooterWeek, i) => {
			let findingfooterWeeks = `.body-f-spoller__week--${i + 1}`

			updateElementContent(findingfooterWeeks, searchfooterWeek, 'innerHTML')
		})
		contentTabsCourseParahraphs.forEach((text, i) => {
			let findingcontentTabsCourseParahraphs = `.content-tabs-course__parahraph--${
				i + 1
			}`

			updateElementContent(
				findingcontentTabsCourseParahraphs,
				text,
				'innerHTML'
			)
		})
		searchtableBlockDatecontentTabsCommunications.forEach((text, i) => {
			let findingtableBlockDatecontentTabsCommunications = `.table-block__date--content-tabs-communication-${
				i + 1
			}`

			updateElementContent(findingtableBlockDatecontentTabsCommunications, text)
		})
		searchtableBlockDatecontentTabsCreatives.forEach((text, i) => {
			let findingtableBlockDatecontentTabsCreatives = `.table-block__date--content-tabs-creative-${
				i + 1
			}`

			updateElementContent(findingtableBlockDatecontentTabsCreatives, text)
		})
		searchtabsGalleryTitles.forEach((text, i) => {
			let findingtabsGalleryTitles = `.tabs-gallery__title--${i + 1}`

			updateElementContent(findingtabsGalleryTitles, text)
		})
		searchcontentGalleryHeadlines.forEach((text, i) => {
			let findingcontentGalleryHeadlines = `.content-gallery__headline--${
				i + 1
			}`

			updateElementContent(findingcontentGalleryHeadlines, text)
		})
		searchParahraphPrivacyText.forEach((text, i) => {
			let findingParahraphPrivacyText = `.parahraph-privacy__text--${i + 1}`

			updateElementContent(findingParahraphPrivacyText, text)
		})
		searchprivacyHeadline.forEach((text, i) => {
			let findingPrivacyHeadline = `.privacy__headline--${i + 1}`

			updateElementContent(findingPrivacyHeadline, text)
		})
		searchprivacyIntro.forEach((text, i) => {
			let findingPrivacyIntro = `.privacy__intro--${i + 1}`

			updateElementContent(findingPrivacyIntro, text)
		})
		searchPrivacyHeadlineList.forEach((text, i) => {
			let findingPrivacyHeadlineList = `.privacy__headline-list--${i + 1}`

			updateElementContent(findingPrivacyHeadlineList, text)
		})
		searchParahraphGordonText.forEach((text, i) => {
			let findingParahraphGordonText = `.parahraph-gordon__text--${i + 1}`

			updateElementContent(findingParahraphGordonText, text)
		})
		searchGordonPageHeadlineList.forEach((text, i) => {
			let findingGordonPageHeadlineList = `.gordon-page__headline-list--${
				i + 1
			}`

			updateElementContent(findingGordonPageHeadlineList, text)
		})
		searchGordonPageText.forEach((text, i) => {
			let findingGordonPageText = `.gordon-page__text--${i + 1}`

			updateElementContent(findingGordonPageText, text)
		})
		searchGordonPageHeadline.forEach((text, i) => {
			let findingGordonPageHeadline = `.gordon-page__headline--${i + 1}`

			updateElementContent(findingGordonPageHeadline, text)
		})
	}
	// Calling a function to update the content
	updateContentKreationAtelier()
	updateElementContent(
		'.about-page__quote',
		selectedLanguageData.aboutPageQuote
	)
	updateElementContent(
		'.course-offer__title',
		selectedLanguageData.courseOfferTitle,
		'innerHTML'
	)
	updateElementContent(
		'.content-tabs-course__quote',
		selectedLanguageData.contentTabsCourseQuote
	)
	updateElementContent('.privacy__title', selectedLanguageData.privacyTitle)
	updateElementContent(
		'.error-page__parahraph',
		selectedLanguageData.errorpPageParahraph
	)
	updateElementContent(
		'.gordon-page__title',
		selectedLanguageData.gordonPageTitle
	)
	updateElementContent(
		'.gordon-page__source',
		selectedLanguageData.gordonPageSource,
		'innerHTML'
	)
	updateElementContent(
		'.gordon-page__members',
		selectedLanguageData.gordonPageMembers,
		'innerHTML'
	)
	updateElementContent(
		'.gordon-page__price',
		selectedLanguageData.gordonPagePrice,
		'innerHTML'
	)

	//================footer========================================================================================================================================

	updateElementContent(
		'.block-f-top__text',
		selectedLanguageData.blockFooterTopText
	)
	updateElementContent(
		'.bottom-footer__copy',
		selectedLanguageData.bottomFooterCopy
	)

	//============home============================================================================================================================================

	const mainPageBlockArray = selectedLanguageData.mainPageBlock
	if (mainPageBlockArray) {
		let mainPageBlock
		mainPageBlockArray.forEach((content, index) => {
			mainPageBlock = `<p class="block-main__parahraph">${content.p1}</p>
			<div class="block-main__parahraph">${content.p2}</div>
			<div class="block-main__parahraph">${content.p3}</div>
			<div class="block-main__parahraph">${content.p4}</div>
			<div class="block-main__parahraph">${content.p5}</div>
			<div class="block-main__parahraph">${content.p6}</div>
			<p class="block-main__name">Eleonora Zingg-Gasser</p>`
		})

		updateElementContent('.main-page__block', mainPageBlock, 'innerHTML')
	}
	const aboutPageBlockArray = selectedLanguageData.aboutPageBlock
	if (aboutPageBlockArray) {
		let aboutPageBlock
		aboutPageBlockArray.forEach((content, index) => {
			aboutPageBlock = `<p class="block-main__parahraph">${content.p1}</p>
			<p class="block-main__parahraph">${content.p2}</p>
			<p class="block-main__parahraph">${content.p3}</p>
			<p class="block-main__parahraph">${content.p4}</p>
			<p class="block-main__parahraph">${content.p5}</p>
			<p class="block-main__parahraph">${content.p6}</p>
			<p class="block-main__parahraph">${content.p7}</p>
			<p class="block-main__parahraph">${content.p8}</p>
			<p class="block-about__name">Eleonora Zingg</p>`
		})

		updateElementContent('.about-page__block', aboutPageBlock, 'innerHTML')
	}
	const tableBlockLinkNextEventsOne = document.querySelectorAll(
		'.table-block__link--next-events-1'
	)
	selectedLanguageData.tableBlockLinkNextEventsOne.forEach((text, i) => {
		if (tableBlockLinkNextEventsOne[i]) {
			tableBlockLinkNextEventsOne[i].textContent = text
		}
	})
	const tableBlockLinkNextEventsTwo = document.querySelectorAll(
		'.table-block__link--next-events-2'
	)
	selectedLanguageData.tableBlockLinkNextEventsTwo.forEach((text, i) => {
		if (tableBlockLinkNextEventsTwo[i]) {
			tableBlockLinkNextEventsTwo[i].textContent = text
		}
	})
	const tableBlockLinkNextEventsThree = document.querySelectorAll(
		'.table-block__link--next-events-3'
	)
	selectedLanguageData.tableBlockLinkNextEventsThree.forEach((text, i) => {
		if (tableBlockLinkNextEventsThree[i]) {
			tableBlockLinkNextEventsThree[i].textContent = text
		}
	})
	const tableBlockLinkcontentTabsCourseOne = document.querySelectorAll(
		'.table-block__link--content-tabs-course-1'
	)
	selectedLanguageData.tableBlockLinkcontentTabsCourseOne.forEach((text, i) => {
		if (tableBlockLinkcontentTabsCourseOne[i]) {
			tableBlockLinkcontentTabsCourseOne[i].textContent = text
		}
	})
	const tableBlockLinkcontentTabsCourseTwo = document.querySelectorAll(
		'.table-block__link--content-tabs-course-2'
	)
	selectedLanguageData.tableBlockLinkcontentTabsCourseTwo.forEach((text, i) => {
		if (tableBlockLinkcontentTabsCourseTwo[i]) {
			tableBlockLinkcontentTabsCourseTwo[i].textContent = text
		}
	})
	const tableBlockLinkcontentTabsCourseThree = document.querySelectorAll(
		'.table-block__link--content-tabs-course-3'
	)
	selectedLanguageData.tableBlockLinkcontentTabsCourseThree.forEach(
		(text, i) => {
			if (tableBlockLinkcontentTabsCourseThree[i]) {
				tableBlockLinkcontentTabsCourseThree[i].textContent = text
			}
		}
	)
	const tableBlockLinkcontentTabsCourseFour = document.querySelectorAll(
		'.table-block__link--content-tabs-course-4'
	)
	selectedLanguageData.tableBlockLinkcontentTabsCourseFour.forEach(
		(text, i) => {
			if (tableBlockLinkcontentTabsCourseFour[i]) {
				tableBlockLinkcontentTabsCourseFour[i].textContent = text
			}
		}
	)
	const tableBlockLinkcontentTabsCourseFive = document.querySelectorAll(
		'.table-block__link--content-tabs-course-5'
	)
	selectedLanguageData.tableBlockLinkcontentTabsCourseFive.forEach(
		(text, i) => {
			if (tableBlockLinkcontentTabsCourseFive[i]) {
				tableBlockLinkcontentTabsCourseFive[i].textContent = text
			}
		}
	)
	const tableBlockLinkContentTabsCommunicationOne = document.querySelectorAll(
		'.table-block__link--content-tabs-communication-1'
	)
	selectedLanguageData.tableBlockLinkContentTabsCommunicationOne.forEach(
		(text, i) => {
			if (tableBlockLinkContentTabsCommunicationOne[i]) {
				tableBlockLinkContentTabsCommunicationOne[i].textContent = text
			}
		}
	)
	const tableBlockLinkContentTabsCommunicationTwo = document.querySelectorAll(
		'.table-block__link--content-tabs-communication-2'
	)
	selectedLanguageData.tableBlockLinkContentTabsCommunicationTwo.forEach(
		(text, i) => {
			if (tableBlockLinkContentTabsCommunicationTwo[i]) {
				tableBlockLinkContentTabsCommunicationTwo[i].textContent = text
			}
		}
	)
	const tableBlockLinkContentTabsCreativeOne = document.querySelectorAll(
		'.table-block__link--content-tabs-creative-1'
	)
	selectedLanguageData.tableBlockLinkContentTabsCreativeOne.forEach(
		(text, i) => {
			if (tableBlockLinkContentTabsCreativeOne[i]) {
				tableBlockLinkContentTabsCreativeOne[i].textContent = text
			}
		}
	)
	const tableBlockLinkContentTabsCreativeTwo = document.querySelectorAll(
		'.table-block__link--content-tabs-creative-2'
	)
	selectedLanguageData.tableBlockLinkContentTabsCreativeTwo.forEach(
		(text, i) => {
			if (tableBlockLinkContentTabsCreativeTwo[i]) {
				tableBlockLinkContentTabsCreativeTwo[i].textContent = text
			}
		}
	)
	const tableBlockLinkContentTabsCreativeThree = document.querySelectorAll(
		'.table-block__link--content-tabs-creative-3'
	)
	selectedLanguageData.tableBlockLinkContentTabsCreativeThree.forEach(
		(text, i) => {
			if (tableBlockLinkContentTabsCreativeThree[i]) {
				tableBlockLinkContentTabsCreativeThree[i].textContent = text
			}
		}
	)
	const tableBlockLinkContentTabsCreativeFour = document.querySelectorAll(
		'.table-block__link--content-tabs-creative-4'
	)
	selectedLanguageData.tableBlockLinkContentTabsCreativeFour.forEach(
		(text, i) => {
			if (tableBlockLinkContentTabsCreativeFour[i]) {
				tableBlockLinkContentTabsCreativeFour[i].textContent = text
			}
		}
	)

	const tableBlockLinkNaturePlaygroupOne = document.querySelectorAll(
		'.table-block__link--nature-playgroup-1'
	)
	selectedLanguageData.tableBlockLinkNaturePlaygroupOne.forEach((text, i) => {
		if (tableBlockLinkNaturePlaygroupOne[i]) {
			tableBlockLinkNaturePlaygroupOne[i].textContent = text
		}
	})
	const tableBlockLinkNaturePlaygroupTwo = document.querySelectorAll(
		'.table-block__link--nature-playgroup-2'
	)
	selectedLanguageData.tableBlockLinkNaturePlaygroupTwo.forEach((text, i) => {
		if (tableBlockLinkNaturePlaygroupTwo[i]) {
			tableBlockLinkNaturePlaygroupTwo[i].textContent = text
		}
	})
	const tableBlockLinkNaturePlaygroupThree = document.querySelectorAll(
		'.table-block__link--nature-playgroup-3'
	)
	selectedLanguageData.tableBlockLinkNaturePlaygroupThree.forEach((text, i) => {
		if (tableBlockLinkNaturePlaygroupThree[i]) {
			tableBlockLinkNaturePlaygroupThree[i].textContent = text
		}
	})
	const privacyItemOne = document.querySelectorAll('.privacy__item--1')
	selectedLanguageData.privacyItem1.forEach((text, i) => {
		if (privacyItemOne[i]) {
			privacyItemOne[i].textContent = text
		}
	})
	const gordonPageItemOne = document.querySelectorAll('.gordon-page__item--1')
	selectedLanguageData.gordonPageItem1.forEach((text, i) => {
		if (gordonPageItemOne[i]) {
			gordonPageItemOne[i].textContent = text
		}
	})
	const gordonPageItemTwo = document.querySelectorAll('.gordon-page__item--2')
	selectedLanguageData.gordonPageItem2.forEach((text, i) => {
		if (gordonPageItemTwo[i]) {
			gordonPageItemTwo[i].textContent = text
		}
	})

	//================footer========================================================================================================================================

	const bodyFooterSpollerTwoLinks = document.querySelectorAll(
		'.body-f-spoller__link--2'
	)
	selectedLanguageData.bodyFooterSpollerTwoText.forEach((text, i) => {
		if (bodyFooterSpollerTwoLinks[i]) {
			bodyFooterSpollerTwoLinks[i].textContent = text
		}
	})
}

document.addEventListener('DOMContentLoaded', function () {
	selectLanguage()
})

document.addEventListener('selectCallback', function (e) {
	selectLanguage()
})
