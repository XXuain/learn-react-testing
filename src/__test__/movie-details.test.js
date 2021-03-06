import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MovieDetails from "../components/movie-details";

const select_movie = {
  id: 1,
  title: "some title",
  description: "some description",
  avg_rating: 2.5,
  no_of_ratings: 2,
};

describe("MoveDetails comp", () => {
  test("Should match a snapshot ", () => {
    // container: render into
    // toMatchSnapshot: compare snapshot
    const { container } = render(<MovieDetails movie={select_movie} />);
    expect(container).toMatchSnapshot();
  });

  test("Should display title an description ", () => {
    const { queryByText } = render(<MovieDetails movie={select_movie} />);
    expect(queryByText(select_movie.title)).toBeTruthy();
    expect(queryByText(select_movie.description)).toBeTruthy();
  });

  test("should display color start", () => {
    const { container } = render(<MovieDetails movie={select_movie} />);
    const select_starts = container.querySelectorAll(".orange");
    expect(select_starts.length).toBe(Math.round(select_movie.avg_rating));
  });

  test("should display number of ratings", () => {
    const { getByTestId } = render(<MovieDetails movie={select_movie} />);
    expect(getByTestId("no_ratings").innerHTML).toBe(
      `(${select_movie.no_of_ratings})`
    );
  });

  test("mouseover should hight light the starts", () => {
    const { container } = render(<MovieDetails movie={select_movie} />);
    const starts = container.querySelectorAll(".rate-container svg");
    starts.forEach((start, indx) => {
      fireEvent.mouseOver(start);
      const hightLight_starts = container.querySelectorAll(
        ".rate-container .purple"
      );
      expect(hightLight_starts.length).toBe(indx + 1);
    });
  });

  test("mouseleave should unhighlight the starts", () => {
    const { container } = render(<MovieDetails movie={select_movie} />);
    const starts = container.querySelectorAll(".rate-container svg");
    starts.forEach((start, indx) => {
      fireEvent.mouseOver(start);
      fireEvent.mouseOut(start);
      const hightLight_starts = container.querySelectorAll(
        ".rate-container .purple"
      );
      expect(hightLight_starts.length).toBe(0);
    });
  });
});
