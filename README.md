# Assumptions regarding the project description

I erred on the side of avoiding extra libraries that struck at the heart of the assignment. For example, I could have brought in react-bootstrap to make things look nicer, and to more quickly do so.

I noted that the description allowed the user to filter by the attributes date_created and last_updated, however, the instructions did not call for visually rendering those attributes. In that situation, there is no way for the user to easily confirm what they are looking at. I decided to render those two additional attributes, which is technically against the instructions. In a real-world work-place scenario, I would have asked the question. Also in this regard, I put some background highlighting on the attribute currently being sorted by to help the user visual cue in on the change.

It was not specified so I decided to sort items in descending order; comment count from largest to smallest and anything date-related from most recent to least. For title, alphabetical.

I assumed the "description" referred to the body attribute.

I used the html_url attribute for purposes of linking an issue's title, assuming a user would want to click and go to the applicable GitHub page.

I assumed "author" in the instructions to be the user attribute.

## Implementation considerations and tradeoffs

The design is responsive and looks good on mobile.

I considered some central state management like Redux but did not think the project's scope and complexity rose to the level of needing it.

I took note of GitHub's API throttling limit of 60 requests per hour. To help deal with this limit, and to improve performance and avoid unnecessary requests over the wire, I temporarily save prior requests in memory in a key/value store. You can see this in the utility function within fetchPage.js. Although extremely unlikely, this alleviates the concern that a user might continously click around pages in excess of 60 within an hour. As it stands, there are only 22 unique pages of issues in the Rails repository, so it is currently almost impossible for a user to be rate-limited. It appears the rate-throttling is per IP address, so technically, the user could click around a bunch of pages, leave the app or otherwise refresh the page, and repeat. In such a situation they could theoretcially be rate-throttled, but it is very unlikely. It would be abnormal behavior to want to view every page to begin with, and it would further abnormal to leave the page and then return within the same hour (twice) to repeat the abnormal behavior of viewing every page. I also considered that the Rails repository issue count may grow. I noted it was stable at 22 pages over the last couple days, but it could grow larger over time. It would have to approximately triple in size to get to 60 pages and I noted 22 pages covers issues going back to 2014. All that said, the safest approach in a production application might be to provide some sort of error handling and warning to the user. For example, if a user does somehow manage to send more than 60 requests to the GitHub API, we could display an error message letting them know to come back later or at a specific time because they've exceeded their usage. Lastly, I'll note that I considered storing previously fetched pages for a longer period of time but it did not seem necessary and would introduce the additional consideration of deciding on an ejection policy for any data that might be stale.

The body/descriptions were large, so I decided to hide them by default with a "Show Description" button. This allows a user to see the issue at a glance and then decide if they want to see the meat of it.

I included basic error handling when fetching data. One area that might be a little brittle is the findTotalPages function in the util folder. If something changes to the shape of that API response the string parsing might fail and findTotalPages would not work as expected. A good future approach might be throwing an error and letting the user know there was a problem finding all the pages.

Another area that is not perfect are the buttons. I'm currently rolling this on my own and simply displaying them all. At a count of 22, I think it looks pretty good, and I do not see an overly pressing need for the usual "previous" and "next" buttons and they feel a little redundant. However, there may be more pages in the future and 50-100 page buttons all being displayed would not be ideal. Again, as discussed above, a drastic increase in pages seems unlikely. For purposes here, my approach seemed good. I could have brought in a third-party library to help with the pagination display or continued to work on my own hand-rolled approach to display only a portion of the total page buttons.

The testing suite is not comprehensive. I've included a sample of some tests. In all honesty, testing is an area of growth for me and something I want to work toward becoming excellent at. As it stood, I went over the allotted time in the instructions of 1-3 hours and I had to stop somewhere.

I used the following library for testing the accessibility of the markup: https://www.npmjs.com/package/@axe-core/react
