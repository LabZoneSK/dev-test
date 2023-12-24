import { fireEvent, render, waitFor } from "@testing-library/react";
import App from "../App";
import * as useGetFeedHook from "../../hooks/useGetFeed";

describe("App", () => {
  describe("container", () => {
    describe("header", () => {
      test("should render header text", () => {
        const { getByText } = render(<App />);
        expect(getByText("Flick app")).toBeInTheDocument();
      });

      test("header text should be a link lead to home page", () => {
        const { getByRole } = render(<App />);
        expect(getByRole("link", { name: "Flick app" })).toHaveAttribute(
          "href",
          "/"
        );
      });
    });

    describe("footer", () => {
      test("should render footer text", () => {
        const { getByText } = render(<App />);
        expect(getByText("Images are from Flickr.")).toBeInTheDocument();
      });
    });

    describe("main content", () => {
      afterEach(() => {
        vi.restoreAllMocks();
      });

      test("should get data from hook", async () => {
        const spy = vi.spyOn(useGetFeedHook, "useGetFeed");

        render(<App />);
        expect(spy).toBeCalled();
      });

      test("should show loading indicator while getting data from hook", async () => {
        vi.spyOn(useGetFeedHook, "useGetFeed").mockImplementation(() => ({
          isLoading: true,
          items: [],
          refetch: vi.fn(),
          error: null,
        }));

        const { getByText } = render(<App />);
        expect(getByText("Loading photo feeds...")).toBeInTheDocument();
      });

      test("should show error if something wrong happened", async () => {
        vi.spyOn(useGetFeedHook, "useGetFeed").mockImplementation(() => ({
          isLoading: false,
          items: [],
          refetch: vi.fn(),
          error: new Error("Unknown error"),
        }));

        const { getByText } = render(<App />);
        expect(
          getByText("Something wrong, please try to reload...")
        ).toBeInTheDocument();
      });

      test("should render card items", async () => {
        vi.spyOn(useGetFeedHook, "useGetFeed").mockImplementation(() => ({
          isLoading: false,
          items: [
            {
              title: "U.S. Air Force Lockheed Martin F-22 Raptor",
              link: "https://www.flickr.com/photos/bpgrossphotography/53417344787/",
              media: {
                m: "https://live.staticflickr.com/65535/53417344787_c5e0465dee_m.jpg",
              },
              date_taken: "2021-06-27T14:04:24-08:00",
              description:
                ' <p><a href="https://www.flickr.com/people/bpgrossphotography/">Bradley P Gross Photography</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/bpgrossphotography/53417344787/" title="U.S. Air Force Lockheed Martin F-22 Raptor"><img src="https://live.staticflickr.com/65535/53417344787_c5e0465dee_m.jpg" width="240" height="160" alt="U.S. Air Force Lockheed Martin F-22 Raptor" /></a></p> <p>Military Aviation: #militaryaviation #military #avgeek #aviation #aviationlovers #planepics #planespotting #aviationpics #aviationglobal #aviationworld #aviationnerd #worldaviation</p> ',
              published: "2023-12-24T15:52:16Z",
              author: 'nobody@flickr.com ("Bradley P Gross Photography")',
              author_id: "83894187@N04",
              tags: "airplane airplanes aviationphotography military",
            },
          ],
          refetch: vi.fn(),
          error: null,
        }));

        const { getByText } = render(<App />);
        expect(
          getByText("U.S. Air Force Lockheed Martin F-22 Raptor")
        ).toBeInTheDocument();
      });

      test("should render card items with empty title as No title", async () => {
        vi.spyOn(useGetFeedHook, "useGetFeed").mockImplementation(() => ({
          isLoading: false,
          items: [
            {
              title: " ",
              link: "https://www.flickr.com/photos/snookerr/53417347017/",
              media: {
                m: "https://live.staticflickr.com/65535/53417347017_0c79238e17_m.jpg",
              },
              date_taken: "2023-09-16T15:46:12-08:00",
              description:
                ' <p><a href="https://www.flickr.com/people/snookerr/">\u74b0\u5cf6\u5c11\u5e74\u65e5\u8a18</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/snookerr/53417347017/" title=" "><img src="https://live.staticflickr.com/65535/53417347017_0c79238e17_m.jpg" width="240" height="180" alt=" " /></a></p> ',
              published: "2023-12-24T15:53:52Z",
              author:
                'nobody@flickr.com ("\u74b0\u5cf6\u5c11\u5e74\u65e5\u8a18")',
              author_id: "101013968@N05",
              tags: "",
            },
          ],
          refetch: vi.fn(),
          error: null,
        }));

        const { getByText } = render(<App />);
        expect(getByText("No title")).toBeInTheDocument();
      });
    });

    describe("search box", () => {
      const mockData = [
        {
          title: "Foobar",
          link: "https://www.flickr.com/photos/snookerr/53417347017/",
          media: {
            m: "https://live.staticflickr.com/65535/53417347017_0c79238e17_m.jpg",
          },
          date_taken: "2023-09-16T15:46:12-08:00",
          description:
            ' <p><a href="https://www.flickr.com/people/snookerr/">\u74b0\u5cf6\u5c11\u5e74\u65e5\u8a18</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/snookerr/53417347017/" title=" "><img src="https://live.staticflickr.com/65535/53417347017_0c79238e17_m.jpg" width="240" height="180" alt=" " /></a></p> ',
          published: "2023-12-24T15:53:52Z",
          author: 'nobody@flickr.com ("\u74b0\u5cf6\u5c11\u5e74\u65e5\u8a18")',
          author_id: "101013968@N05",
          tags: "",
        },
        {
          title: "U.S. Air Force Lockheed Martin F-22 Raptor",
          link: "https://www.flickr.com/photos/bpgrossphotography/53417344787/",
          media: {
            m: "https://live.staticflickr.com/65535/53417344787_c5e0465dee_m.jpg",
          },
          date_taken: "2021-06-27T14:04:24-08:00",
          description:
            ' <p><a href="https://www.flickr.com/people/bpgrossphotography/">Bradley P Gross Photography</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/bpgrossphotography/53417344787/" title="U.S. Air Force Lockheed Martin F-22 Raptor"><img src="https://live.staticflickr.com/65535/53417344787_c5e0465dee_m.jpg" width="240" height="160" alt="U.S. Air Force Lockheed Martin F-22 Raptor" /></a></p> <p>Military Aviation: #militaryaviation #military #avgeek #aviation #aviationlovers #planepics #planespotting #aviationpics #aviationglobal #aviationworld #aviationnerd #worldaviation</p> ',
          published: "2023-12-24T15:52:16Z",
          author: 'nobody@flickr.com ("Bradley P Gross Photography")',
          author_id: "83894187@N04",
          tags: "airplane airplanes aviationphotography military",
        },
      ];

      test("should be available when there is data", () => {
        vi.spyOn(useGetFeedHook, "useGetFeed").mockImplementation(() => ({
          isLoading: false,
          items: mockData,
          refetch: vi.fn(),
          error: null,
        }));

        const { container } = render(<App />);
        expect(
          container.querySelector(`input[name="search"]`)
        ).toBeInTheDocument();
      });

      test("should filter out search value", async () => {
        vi.spyOn(useGetFeedHook, "useGetFeed").mockImplementation(() => ({
          isLoading: false,
          items: mockData,
          refetch: vi.fn(),
          error: null,
        }));

        const { getByRole, getByText } = render(<App />);
        const input = getByRole("textbox", { name: "search" });
        fireEvent.change(input, { target: { value: "U.S" } });
        await waitFor(() => {
          expect(
            getByText("U.S. Air Force Lockheed Martin F-22 Raptor")
          ).toBeInTheDocument();
          expect(() => getByText("Foobar")).toThrow(
            "Unable to find an element"
          );
        });
      });
    });
  });
});
