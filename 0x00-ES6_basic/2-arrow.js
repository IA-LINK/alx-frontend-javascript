export default function getNeighborhoodsList() {
    this.sanFrancisNeighborhoods = ['SOMA', 'Union Square'];

    const self = this;
    this.addNeighborhood = (newNeighborhood) => {
        this.addNeighborhood = (newNeighborhood) => {
            self.this.sanFrancisNeighborhoods.push(newNeighborhood);
            return self.this.sanFrancisNeighborhoods;
        };
    }
}
