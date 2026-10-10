<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep portfolio facts in `src/data/portfolio.ts` and use reusable sections, so approved content and contact links can be updated without changing presentation.
- Use a single index route with anchor navigation as explicitly requested; case studies use accessible Radix dialogs rather than separate routes.
- Never substitute conceptual project cover art for verified project screenshots; actual gallery assets stay empty until supplied.
- Contact links stay unavailable until approved values are supplied; never invent links or pretend a message was sent.
- Navigation uses explicit section IDs separate from labels so translated copy cannot break anchors.
- Project records drive filters, optional evidence metrics, workflows and video links in a reusable case-study dialog so content changes remain presentation-independent.
- Without verified screenshots, project covers are typographic summaries, never fabricated interface or work samples.
- Optional verified card covers live on project records and are opt-in for cards, preserving case-study art and evidence galleries; failed images return to typographic summaries.
- Optional original media and labeled evidence slots live in portfolio data and render through reusable galleries, so missing assets never become fabricated work samples.
- Project cards share metrics, pipelines and evidence presentation with case studies, so preview claims remain consistent with detail claims.
- Case study dialogs use a sticky Radix close control and restore focus to the originating card, so long galleries remain keyboard- and mobile-accessible.
