import "./Community_Board.scss";


export function CommunityBoardPage() {
  return (
    <article id="CommunityBoardPage">
			<h1 className="title">Pharagraph</h1>
      <section>
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
      </section>
      <section>
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
      </section>
      <section>
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
      </section>
      <section>
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
      </section>
    </article>
  );
}

export function CommunityCard() {
  return <div className="CommunityCard"></div>;
}
